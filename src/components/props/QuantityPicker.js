import { IncBtn, QuantityField } from "../../styles/StyleComp";

export default function QuantityPicker({ quantity, setQuantity }) {
  let increment = () => {
    setQuantity(quantity + 1);
  };
  let decrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  return (
    <div style={{ margin: "0px 0px 0px auto", zIndex: "1" }}>
      <IncBtn onClick={increment}>↑</IncBtn>
      <QuantityField
        type="text"
        value={quantity}
        onChange={(e) =>
          setQuantity(
            Number(e.currentTarget.value) ? Number(e.currentTarget.value) : ""
          )
        }
        style={{}}
      />
      <IncBtn onClick={decrement}>↓</IncBtn>
    </div>
  );
}
