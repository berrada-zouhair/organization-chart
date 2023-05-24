import React, { ReactElement } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { groupBy } from "lodash";
import { AnchorPositionType, LineType } from "react-archer/src/types";
import { Hierarchy, Member } from "../../services/types";
import MemberCard from "../../components/MemberCard/MemberCard";
import { Container, HierarchyLine, RootLine } from "./HierachyLayout.style";

type RelationType = {
  targetId: string;
  targetAnchor: AnchorPositionType;
  sourceAnchor: AnchorPositionType;
  order?: number;
  label?: React.ReactNode | null | undefined;
  style?: LineType;
};

const memberToCard = (member: Member) => {
  return (
    <MemberCard
      image={member.info.image}
      firstName={member.info.firstName}
      lastName={member.info.lastName}
      position={member.info.position}
      description={member.info.description}
    />
  );
};

const getSubordinatesRelations = (
  subordinates: Member[]
): RelationType[] | undefined => {
  return subordinates.length > 0
    ? subordinates.map(
        (subordinate): RelationType => ({
          targetId: subordinate.info.id.toString(),
          targetAnchor: "top",
          sourceAnchor: "bottom",
        })
      )
    : undefined;
};

const memberToArcherElement = (
  member: Member,
  relations: RelationType[] | undefined
): ReactElement => {
  return (
    <ArcherElement
      key={member.info.id.toString()}
      id={member.info.id.toString()}
      relations={relations}
    >
      <div>{memberToCard(member)}</div>
    </ArcherElement>
  );
};

const getAllArchers = (
  manager: Member,
  subordinates: Member[],
  level: number
): { archer: ReactElement; level: number }[] => {
  if (manager.info.id === 4) {
    console.log("QQQQQ", getSubordinatesRelations(manager.subordinates));
  }
  const managerArcher = {
    archer: memberToArcherElement(
      manager,
      getSubordinatesRelations(manager.subordinates)
    ),
    level,
  };
  if (subordinates.length === 0) {
    return [managerArcher];
  }
  const subordinatesArchers = manager.subordinates.flatMap((subordinate) =>
    getAllArchers(subordinate, subordinate.subordinates, level + 1)
  );

  return [managerArcher, ...subordinatesArchers];
};

const getLevelArchers = (
  dictionary: { [level: string]: ReactElement[] },
  level: number
) => {
  const archers = dictionary[level] as unknown as {
    archer: ReactElement;
    level: number;
  }[];
  if (archers.length > 1) {
    const hierarchyLine = (
      <HierarchyLine key={`level${level}`}>
        {archers.map((archer) => (
          <div key={`archer${archer.archer.key}`}>{archer.archer}</div>
        ))}
      </HierarchyLine>
    );
    console.log("@@@@@@1", hierarchyLine);
    return hierarchyLine;
  }

  console.log("AAAAAAAA", archers[0]);
  const rootLine = (
    <RootLine key={`level${level}`}>
      <div key={`archer${archers[0].archer.key}`}>{archers[0].archer}</div>
    </RootLine>
  );
  console.log("@@@@@@2", rootLine);
  return rootLine;
};

const buildHierarchy = (hierarchy: Hierarchy) => {
  const archers = getAllArchers(hierarchy.root, hierarchy.root.subordinates, 0);
  const archersByLevel = groupBy(archers, "level");
  const maxLevel = Math.max(
    ...Object.keys(archersByLevel).map((level) => +level)
  );
  const levels = [...Array.from({ length: maxLevel + 1 }, (_, index) => index)];
  return (
    <ArcherContainer
      strokeColor="#4bbeff"
      lineStyle="curve"
      endMarker={true}
      endShape={{ arrow: { arrowThickness: 5, arrowLength: 5 } }}
      strokeWidth={2}
    >
      {levels.map((level) =>
        getLevelArchers(
          archersByLevel as unknown as { [level: string]: ReactElement[] },
          level
        )
      )}
    </ArcherContainer>
  );
};

type HierarchyLayoutProps = {
  hierarchy: Hierarchy;
};
const HierarchyLayout: React.FunctionComponent<HierarchyLayoutProps> = ({
  hierarchy,
}) => {
  return <Container>{buildHierarchy(hierarchy)}</Container>;
};

export default HierarchyLayout;
