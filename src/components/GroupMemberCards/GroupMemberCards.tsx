import React from "react";
import { Member } from "../../services/types";
import {
  CardsContainer,
  Container,
  CountSubordinates,
} from "./GroupMemberCards.style";
import MemberCardSmall from "../MemberCardSmall/MemberCardSmall";
import MemberCard from "../MemberCard/MemberCard";

type GroupMemberCardsProps = {
  members: Member[];
};

type CardPosition = {
  top: number;
  left: number;
  zIndex: number;
};
const GroupMemberCards: React.FunctionComponent<GroupMemberCardsProps> = ({
  members,
}) => {
  const containerSize = { height: 237, width: 228 };
  const memberCardSize = { height: 237, width: 174 };
  const memberCardSmallSize = { height: 212, width: 156 };
  const firstCardPosition: CardPosition = {
    top: 13,
    left: containerSize.width / 2 - memberCardSize.width / 2 - 20,
    zIndex: 0,
  };
  const secondCardPosition: CardPosition = {
    top: 13,
    left: containerSize.width / 2 - memberCardSmallSize.width / 2 + 30,
    // memberCardSize.width -
    // memberCardSmallSize.width,
    zIndex: 0,
  };
  const middleCardPosition: CardPosition = {
    top: 0,
    left: containerSize.width / 2 - memberCardSize.width / 2,
    zIndex: 1,
  };
  return (
    <Container>
      <CardsContainer>
        <div style={{ ...firstCardPosition, position: "absolute" }}>
          <MemberCardSmall
            image={members[1].info.image}
            firstName={members[1].info.firstName}
            lastName={members[1].info.lastName}
            position={members[1].info.position}
            description={members[1].info.description}
          />
        </div>
        <div style={{ ...secondCardPosition, position: "absolute" }}>
          <MemberCardSmall
            image={members[2].info.image}
            firstName={members[2].info.firstName}
            lastName={members[2].info.lastName}
            position={members[2].info.position}
            description={members[2].info.description}
          />
        </div>
        <div style={{ ...middleCardPosition, position: "absolute" }}>
          <MemberCard
            image={members[0].info.image}
            firstName={members[0].info.firstName}
            lastName={members[0].info.lastName}
            position={members[0].info.position}
            description={members[0].info.description}
          />
        </div>
      </CardsContainer>
      <CountSubordinates>33</CountSubordinates>
    </Container>
  );
};

export default GroupMemberCards;
