import { useState, useEffect } from "react";
import { getProducts } from "../../utils/utils";
import ProductCard from "./ProductCard";
import { ProductArrContainer } from "../../styles/ProductStyle";
import { useParams } from "react-router-dom";

export default function DietProdArray({ url }) {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    url
      ? getProducts(url).then((res) => {
          setProducts(res);
        })
      : getProducts().then((res) => {
          setProducts(res);
        });
  }, [url]);

  //challenge display all the items except the one the page belongs to

  return (
    <>
      <h3 style={{ textAlign: "left", marginTop: "16px" }}>
        People also Like:
      </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductArrContainer>
          {products.length ? (
            products
              .filter((data) => `${data.id}` !== params.productId)
              .map((data) => <ProductCard key={data.id} data={data} />)
          ) : (
            <></>
          )}
        </ProductArrContainer>
      </div>
    </>
  );
}
