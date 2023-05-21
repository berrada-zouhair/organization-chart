import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 154px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 237px;
  width: 174px;
  border: 0.5px solid #c9c9c9;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px 4px 4px 4px;
  padding: 10px 0 0 0;
  gap: 20px;
`;

export const PhotoContainer = styled.div`
  width: 154px;
  height: 166px;
  position: relative;
`;
export const Photo = styled.img`
  width: 154px;
  height: 166px;
  border-radius: 0 2px 2px 0;
  object-fit: cover;
  //z-index: -1;
`;

export const PhotoRectangle = styled.div`
  position: absolute;
  width: 41px;
  height: 182px;
  left: 0;
  top: 0;
  opacity: 0.5;
  background: #4bbeff;
  z-index: 1;
`;
export const NameText = styled.div`
  //font-family: "McLaren";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const PositionText = styled.div`
  //font-family: 'McLaren';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;
