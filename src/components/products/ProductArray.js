import { useState, useEffect } from "react";
import { getProducts } from "../../utils/utils";
import ProductCard from "./ProductCard";
import {
  ProductArrContainer,
  SortBtn,
  SortIcons,
} from "../../styles/ProductStyle";
import Catagories from "./Catagories";
import { useParams } from "react-router-dom";

export default function ProductArray() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(0);
  const [order, setOrder] = useState(1);
  const [type, setType] = useState(1);
  let params = useParams();
  useEffect(() => {
    //-------------------------------------------Sorty Array
    function sortArray(arr) {
      return sort
        ? order
          ? type
            ? arr.sort(function (a, b) {
                return a.price - b.price;
              })
            : arr.sort((a, b) => {
                let fa = a.title.toLowerCase(),
                  fb = b.title.toLowerCase();
                if (fa < fb) {
                  return -1;
                }
                if (fa > fb) {
                  return 1;
                }
                return 0;
              })
          : type
          ? arr.sort(function (a, b) {
              return b.price - a.price;
            })
          : arr.sort((a, b) => {
              let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
              if (fa > fb) {
                return -1;
              }
              if (fa < fb) {
                return 1;
              }
              return 0;
            })
        : arr;
    }

    //--------------------------------------------Handle Router Parameters
    //Want to use the product array accross several different pages.
    params.catagoryId
      ? getProducts(`products/category/${params.catagoryId}`).then((res) => {
          setProducts(sortArray(res));
        })
      : params.query
      ? getProducts(`products`).then((res) => {
          setProducts(
            sortArray(
              res.filter((product) => {
                return (
                  product.title
                    .toLowerCase()
                    .replace(/\s/g, "")
                    .search(params.query.toLowerCase().replace(/\s/g, "")) +
                    1 >
                  0
                );
              })
            )
          );
        })
      : getProducts().then((res) => {
          setProducts(sortArray(res));
        });
  }, [params.catagoryId, params.query, sort, order, type]);

  return (
    <>
      {!params.catagoryId && !params.query && <Catagories />}
      <SortIcons>
        <SortBtn onClick={() => setSort(!sort)}>
          {sort ? (
            <i className='fa fa-bars' style={{ fontSize: "18px" }}></i>
          ) : (
            <i className='fa fa-sort' style={{ fontSize: "18px" }}></i>
          )}
        </SortBtn>
        <SortBtn disabled={!sort ? true : false} onClick={() => setType(!type)}>
          {type ? (
            <i className='fa fa-money' style={{ fontSize: "18px" }}></i>
          ) : (
            <i className='fa fa-font' style={{ fontSize: "18px" }}></i>
          )}
        </SortBtn>
        <SortBtn
          disabled={!sort ? true : false}
          onClick={() => setOrder(!order)}
        >
          {type ? (
            order ? (
              <i
                className='fa fa-sort-numeric-asc'
                style={{ fontSize: "18px" }}
              ></i>
            ) : (
              <i
                className='fa fa-sort-numeric-desc'
                style={{ fontSize: "18px" }}
              ></i>
            )
          ) : order ? (
            <i
              className='fa fa-sort-alpha-asc'
              style={{ fontSize: "18px" }}
            ></i>
          ) : (
            <i
              className='fa fa-sort-alpha-desc'
              style={{ fontSize: "18px" }}
            ></i>
          )}
        </SortBtn>
      </SortIcons>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductArrContainer>
          {products.length ? (
            products.map((data) => <ProductCard key={data.id} data={data} />)
          ) : (
            <></>
          )}
        </ProductArrContainer>
      </div>
    </>
  );
}
