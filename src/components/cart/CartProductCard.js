import { useState, useEffect, useContext } from "react";
import { getProducts } from "../../utils/utils";
import {
  CartCardContainer,
  ProductTitleCart,
  CartImg,
  PriceTagSm,
  PriceTagMd,
  PriceContainer
} from "../../styles/CartStyle";
import QuantityPicker from "../props/QuantityPicker";
import DeleteBtn from "../props/DeleteBtn";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartProductCard({ productId, quantity }) {
  const [newQuantity, setQuantity] = useState(quantity ? quantity : 1);
  const [data, setData] = useState([]);
  const { updateQtty } = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(() => {
    updateQtty(productId, newQuantity);
    async function loadArr() {
      let product = await getProducts(`/products/${productId}`);
      setData(product);
    }
    loadArr();
  }, [productId, newQuantity, updateQtty]);

  let onClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {data.price && (
        <CartCardContainer>
          <div
            id="clickBox"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "0"
              // transform: "translate(-16px, -16px)"
            }}
            onClick={() => onClick(productId)}
          ></div>
          <DeleteBtn productId={productId} />
          <div
            style={{
              width: "4em",
              marginLeft: "8px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <CartImg src={data.image} alt="No image" />
          </div>
          <ProductTitleCart style={{ WebkitLineClamp: "1" }}>
            {data.title}
          </ProductTitleCart>

          <QuantityPicker quantity={newQuantity} setQuantity={setQuantity} />
          <PriceContainer>
            <PriceTagSm>{`$${data.price.toFixed(2)}`}</PriceTagSm>
            <PriceTagMd>{`$${(data.price * newQuantity).toFixed(
              2
            )}`}</PriceTagMd>
          </PriceContainer>
        </CartCardContainer>
      )}
    </>
  );
}
