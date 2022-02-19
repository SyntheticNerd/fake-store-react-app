import { useContext } from "react";
import StarReviews from "../props/StarReviews";
import CartBtn from "../props/CartBtn";
import {
  Thumbnail,
  SmallContainer,
  ProductTitleShort,
  PriceTag,
  CardCartBtn
} from "../../styles/ProductStyle";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data, setProductPage, setShowProduct }) {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  let onClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <SmallContainer>
        <div
          id="clickBox"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transform: "translate(-16px, -16px)"
          }}
          onClick={() => onClick(data.id)}
        ></div>
        <CardCartBtn onClick={() => addItem(data, 1)}>
          <CartBtn />
        </CardCartBtn>
        <Thumbnail url={data.image} />
        <ProductTitleShort>{data.title}</ProductTitleShort>
        <PriceTag>{`$${data.price.toFixed(2)}`}</PriceTag>
        <StarReviews rating={data.rating} />
      </SmallContainer>
    </>
  );
}
