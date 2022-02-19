import styled from "styled-components";

export const FrontStars = styled.div`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${(props) => props.width && `${props.width}%`};
  height: 30px;
`;

export const IncBtn = styled.button`
  width: 1.8em;
  cursor: pointer;
  @media (max-width: 580px) {
    width: 0px;
    display: none;
  }
`;

export const QuantityField = styled.input`
  width: 2em;
  border: 2px solid lightblue;
  text-align: center;
  border-radius: 4px;
`;

export const HoverEffect = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    opacity: 1;
  }
`;

export const DelBtnStyle = styled.button`
  margin-left: 8px;
  background: none;
  border: none;
  width: fit-content;
  display: flex;
  align-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "0px 2px 2px rgba(0, 0, 0, 0.4)"};
  &:hover {
    box-shadow: ${(props) =>
      props.shadow === "none"
        ? props.shadow
        : "0px 2px 2px rgba(255, 0, 0, 0.4)"};
  }
`;
