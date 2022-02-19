import styled from "styled-components";

export const CartCheckout = styled.div`
  background: white;
  flex: 1;
  order: 1;
  border-radius: 8px;
  margin: 8px;
  padding: 8px;
  height: fit-content;
  position: sticky;
  top: 50px;
  z-index: 3;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  @media (max-width: 810px) {
    order: 0;
    /* width: 100%; */
    flex-direction: column;
  }
`;

export const CartPage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 810px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CartList = styled.div`
  width: 70%;
  margin-left: 8px;
  @media (max-width: 810px) {
    width: auto;
    /* overflow: hidden; */
  }
`;

export const CheckoutDet = styled.div`
  @media (max-width: 810px) {
    display: flex;
    align-items: center;
  }
`;

export const CartCardContainer = styled.div`
  background: white;
  position: relative;
  height: 4em;
  width: 100%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  margin: 8px 0px;
  text-align: left;
  @media (max-width: 810px) {
    width: calc(100% + 8px);
    padding: 0;
    margin: 8px 0px 8px -8px;
    border-radius: 0px;
  }
`;

export const CartImg = styled.img`
  /* width: 4em; */
  max-height: 3.5em;
  max-width: 3.5em;
`;

export const ProductTitleCart = styled.h2`
  font-weight: normal;
  font-size: 0.9em;
  line-height: 1.2em;
  overflow: hidden;
  flex: 1;
  /* display: -webkit-box; */
  /* -webkit-box-orient: vertical; */
  /* -webkit-line-clamp: 2; */
  /* there is an issue with webclamp i cant figure out 
  the elipses will not populate on line 2 stay on line 1*/
  height: 2.44em;
  width: 45%;
`;

export const PriceTagSm = styled.p`
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.3em;
  padding: 0px 8px;
  min-width: 5em;
`;

export const PriceTagMd = styled.h3`
  line-height: 1.3em;
  padding: 0px 8px;
  min-width: 5em;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  /* margin: 0px 32px 0px 0px; */
  width: fit-content;
  flex-direction: column;
  position: relative;
  right: 0px;
  padding-right: 16px;
  /* @media (max-width: 800px) {
    f
    margin: 0px 0px 0px auto;
  } */
`;

export const CheckoutBtn = styled.button`
  padding: 4px;
  width: 100%;
  margin-bottom: 8px;
  @media (max-width: 810px) {
    width: fit-content;
    margin: 0px;
  }
`;
