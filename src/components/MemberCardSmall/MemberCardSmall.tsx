import React from "react";
import {
  InfoContainer,
  NameText,
  Photo,
  PhotoContainer,
  PhotoRectangle,
  PositionText,
  TextContainer,
} from "./MemberCardSmall.style";

type MemberCardProps = {
  image: string;
  firstName: string;
  lastName: string;
  position: string;
  description: string;
};
const MemberCardSmall: React.FunctionComponent<MemberCardProps> = ({
  image,
  firstName,
  lastName,
  position,
  description,
}) => {
  return (
    <InfoContainer>
      <PhotoContainer>
        <Photo src={image} />
        <PhotoRectangle />
      </PhotoContainer>
      <TextContainer>
        <NameText>{`${lastName} ${firstName}`}</NameText>
        <PositionText>{`${position}${description}`}</PositionText>
      </TextContainer>
    </InfoContainer>
  );
};

export default MemberCardSmall;
