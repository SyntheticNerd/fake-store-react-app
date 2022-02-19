import { HoverEffect } from "../../styles/StyleComp";
import {
  NavBar,
  Link,
  NavLinkCont,
  NavListCont,
  NavIcon,
  Vl,
  DropDownCont,
  DropDownBtn,
  IconCont
} from "../../styles/NavStyle";
import CartBtn from "../props/CartBtn";
import Search from "./Search";
import { ReactComponent as ProfileIcon } from "../../img/profile.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Nav({ url }) {
  const { cartQtty } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <>
      <NavBar>
        <NavIcon onClick={() => navigate("/")}>Logo</NavIcon>
        <DropDownCont>
          <DropDownBtn>Catagories</DropDownBtn>
          <NavListCont>
            <Vl />
            <NavLinkCont onClick={() => navigate("/")}>
              <Link>Home</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont onClick={() => navigate("/catagory/electronics")}>
              <Link>Electronics</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont onClick={() => navigate("/catagory/jewelery")}>
              <Link>Jewelery</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont onClick={() => navigate("/catagory/men's%20clothing")}>
              <Link>Men's Clothing</Link>
            </NavLinkCont>
            <Vl />
            <NavLinkCont
              onClick={() => navigate("/catagory/women's%20clothing")}
            >
              <Link>Women's Clothing</Link>
            </NavLinkCont>
            <Vl />
          </NavListCont>
        </DropDownCont>
        <IconCont>
          <Search />
          <HoverEffect>
            <ProfileIcon
              onClick={() => navigate("/account")}
              style={{ margin: "0px 8px" }}
            />
          </HoverEffect>
          <HoverEffect>
            <span onClick={() => navigate("/cart")}>
              <CartBtn color="white" />
            </span>
          </HoverEffect>
          <p>{cartQtty}</p>
        </IconCont>
      </NavBar>
    </>
  );
}
