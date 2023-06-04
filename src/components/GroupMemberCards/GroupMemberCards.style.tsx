import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const CardsContainer = styled.div`
  position: relative;
  width: 228px;
  height: 247px;
  //background-color: lightblue;
`;

export const CountSubordinates = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #000000;
  font-weight: bold;
  font-size: 12px;
`;

export const Card = styled.div<{
  top: number;
  left: number;
  zIndex: number;
}>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex};
`;
