import styled from "styled-components";

export const ProductArrContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  flex-basis: content;
  padding: auto;
  padding-top: 16px;
  &:after {
    width: fit-content;
  }
`;

export const SmallContainer = styled.div`
  width: 15em;
  height: 20em;
  margin: 8px;
  padding: 16px;
  border-radius: 2px;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
  opacity: 88%;
  transition: all 0.2s;
  position: relative;
  &:hover {
    scale: 1.05;
    opacity: 100%;
  }
  @media (max-width: 530px) {
    width: 83%;
  }
`;

export const Thumbnail = styled.div`
  background: ${(props) =>
    props.url ? `url(${props.url}) center/contain no-repeat` : "red"};
  width: 100%;
  height: 60%;
  margin-bottom: 8px;
`;

export const PriceTag = styled.h1`
  line-height: 1.3em;
  width: fit-content;
`;

export const ProductTitleShort = styled.h2`
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const CardCartBtn = styled.button`
  position: absolute;
  right: 16px;
  background: white;
  border: none;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

export const PageCartBtn = styled.button`
  background: white;
  border: none;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

export const CatBtn = styled.button`
  margin: 16px;
  height: 200px;
  width: 20vw;
  min-width: 155px;
  background: white;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  opacity: 88%;
  cursor: pointer;
  &:hover {
    scale: 1.05;
    opacity: 100%;
  }
  @media (max-width: 780px) {
    width: 40vw;
  }
  @media (max-width: 410px) {
    width: 80vw;
    height: 120px;
  }
`;

export const ProductPgCont = styled.div`
  /* min-height: 85vh; */
  min-height: calc(100vh - 104px);
  border-radius: 8px;
  width: 100%;
  background: white;
  padding: 64px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const ProductImg = styled.div`
  background: ${(props) =>
    props.url ? `url(${props.url}) center/contain no-repeat` : "red"};
  width: 100%;
  height: 50vh;
  margin-bottom: 8px;
`;

export const ProductDesc = styled.article`
  text-align: left;
`;

export const SortBtn = styled.button`
  padding: 6px 8px;
  text-align: center;
  margin: 8px;
  margin-top: 24px;
  background: rgba(255, 255, 255);
  border-radius: 8px;
  border: none;
  transition: all 0.2s;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;
