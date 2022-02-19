import styled from "styled-components";

export const CheckoutPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: blue; */
  justify-content: center;
  align-content: center;
`;

export const InputCont = styled.div``;

export const ProdOverview = styled.table`
  background: white;
  width: 80%;
  padding: 16px;
  margin: 16px auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  @media (max-width: 500px) {
    width: calc(100% - 16px);
    margin: 16px 8px;
  }
`;

export const GuestCheckoutForm = styled.form`
  background: white;
  width: 80%;
  margin: 16px auto;
  border-radius: 8px;
  padding: 32px 0px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

  @media (max-width: 500px) {
    width: calc(100% - 16px);
    margin: 16px auto;
  }
`;

export const CardNumber = styled.input`
  width: 82px;
  max-width: 20%;
  height: 38px;
  color: #333333;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  outline: none !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-right: 8px;
`;

export const InputBox = styled.input`
  width: 100%;
  max-width: 10em;
  height: 38px;
  color: #333333;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  outline: none !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-right: 8px;
`;

export const StandardField = styled.fieldset`
  border: none !important;
`;

export const FlexField = styled.fieldset`
  width: 100%;
  display: flex;
  border: none !important;
  align-items: center;
  justify-content: center;
`;

export const Selector = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 8px;
  float: left;
  height: 38px;
  color: #333333;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  outline: none !important;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const Tr = styled.tr`
  /* width: 100%;
  padding: 4px; */
`;

export const Th = styled.th`
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const TitleCol = styled.td`
  padding: 4px;
  height: 2.5em;
  width: 60;
  font-size: 0.9em;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
