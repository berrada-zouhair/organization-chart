import { ArcherContainer, ArcherElement } from "react-archer";
import React from "react";
import MemberCard from "../../components/MemberCard/MemberCard";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const HierachyLayout: React.FunctionComponent = () => {
  return (
    <div style={{ height: "500px", margin: "50px" }}>
      <ArcherContainer
        strokeColor="black"
        lineStyle="angle"
        endMarker={false}
        strokeWidth={2}
      >
        <div style={rootStyle}>
          <ArcherElement
            id="root"
            relations={[
              {
                targetId: "element2",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
              {
                targetId: "element3",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
              {
                targetId: "element4",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
              {
                targetId: "element5",
                targetAnchor: "top",
                sourceAnchor: "bottom",
              },
            ]}
          >
            <div>
              <MemberCard
                image={
                  "https://media.istockphoto.com/id/538264373/photo/success-and-nothing-less.jpg?s=170667a&w=0&k=20&c=_HiOCHlczf5p3rSVAK2a4qUhC-pUThmr88A2bnB7tq0="
                }
                firstName={"Zakaria"}
                lastName={"BERRADA"}
                position={"CEO"}
                description={""}
              />
            </div>
          </ArcherElement>
        </div>

        <div style={rowStyle}>
          <ArcherElement id="element2">
            <div>
              <MemberCard
                image={
                  "https://media.istockphoto.com/id/1309328823/fr/photo/verticale-headshot-de-lemploy%C3%A9-masculin-de-sourire-dans-le-bureau.jpg?b=1&s=612x612&w=0&k=20&c=Y8DpRjL_WZSVmV9LEMAJgogYMGMkqQsvcZ2Nb5LBmrk="
                }
                firstName={"Zouhair"}
                lastName={"BERRADA"}
                position={"VP"}
                description={""}
              />
            </div>
          </ArcherElement>

          <ArcherElement id="element3">
            <div>
              <MemberCard
                image={
                  "https://media.istockphoto.com/id/529278045/photo/working-on-something-great.jpg?s=170667a&w=0&k=20&c=XT9z1yOr2-bw4lLxb7FneBPzqGkFtiKI1PBbnGyYQSs="
                }
                firstName={"Driss"}
                lastName={"BERRADA"}
                position={"CTO"}
                description={""}
              />
            </div>
          </ArcherElement>

          <ArcherElement id="element4">
            <div>
              <MemberCard
                image={
                  "https://us.123rf.com/450wm/fizkes/fizkes2009/fizkes200901023/156165274-vue-rapproch%C3%A9e-de-l-%C3%A9cran-de-la-t%C3%AAte-d-un-homme-caucasien-souriant-dans-des-lunettes-ayant-une.jpg?ver=6"
                }
                firstName={"Othmane"}
                lastName={"BERRADA"}
                position={"CFO"}
                description={""}
              />
            </div>
          </ArcherElement>

          <ArcherElement id="element5">
            <div>
              <MemberCard
                image={
                  "https://media.istockphoto.com/id/1141906656/photo/home-office.jpg?s=612x612&w=0&k=20&c=ZKiSPtFiLaxVxVy22Dy9ytZYgk7qEJ0AEhodz5EkViQ="
                }
                firstName={"Mouhsine"}
                lastName={"BERRADA"}
                position={"Coach"}
                description={""}
              />
            </div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default HierachyLayout;
