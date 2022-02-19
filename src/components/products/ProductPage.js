import { useState, useEffect, useContext } from "react";
import { getProducts } from "../../utils/utils";
import StarReviews from "../props/StarReviews";
import {
  ProductImg,
  PriceTag,
  ProductPgCont,
  ProductDesc,
  PageCartBtn
} from "../../styles/ProductStyle";
import { useParams } from "react-router-dom";
import QuantityPicker from "../props/QuantityPicker";
import CartBtn from "../props/CartBtn";
import DietProdArray from "./DietProdArray";
import { CartContext } from "../../context/CartContext";

export default function ProductPage({ url }) {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProducts(`products/${productId}`).then((res) => {
      setProduct(res);
      console.log(res);
    });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [productId]);
  return (
    <>
      {product.title && (
        <div style={{ padding: "16px" }}>
          <ProductPgCont>
            <div style={{ maxWidth: "810px", margin: "auto" }}>
              <ProductImg url={product.image} />
              <h3 style={{ textAlign: "left" }}>
                <b>{product.title}</b>
              </h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PriceTag>{`${product.price.toFixed(2)}`}</PriceTag>
                <div style={{ margin: "0px 16px 0px auto" }}>
                  <QuantityPicker
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
                <PageCartBtn onClick={() => addItem(product, quantity)}>
                  <CartBtn />
                </PageCartBtn>
              </div>
              <StarReviews rating={product.rating} />
              <ProductDesc> {product.description} </ProductDesc>
              <DietProdArray url={`products/category/${product.category}`} />
            </div>
          </ProductPgCont>
        </div>
      )}
    </>
  );
}

//

// updateQtty(
//   productId,
//   Number(e.currentTarget.value) ? Number(e.currentTarget.value) : ""
// )
