import React from "react";
import {
  InfoContainer,
  NameText,
  Photo,
  PhotoContainer,
  PhotoRectangle,
  PositionText,
  TextContainer,
} from "./MemberCard.style";

type MemberCardProps = {
  image: string;
  firstName: string;
  lastName: string;
  position: string;
  description: string;
};
const MemberCard: React.FunctionComponent<MemberCardProps> = ({
  image,
  firstName,
  lastName,
  position,
  description,
}) => {
  console.log(image, firstName, lastName, position, description);
  return (
    // <Container>
    // <>
    //   <PhotoRectangle />
    //   <InfoContainer>
    //     <Photo src={image}></Photo>
    //   </InfoContainer>
    // </>
    // </Container>
    <InfoContainer>
      <PhotoContainer>
        <Photo src={image} />
        <PhotoRectangle />
      </PhotoContainer>
      <TextContainer>
        <NameText>{`${lastName} ${firstName}`}</NameText>
        <PositionText>{`${position}`}</PositionText>
      </TextContainer>
    </InfoContainer>
  );
};

export default MemberCard;
