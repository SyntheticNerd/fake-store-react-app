import { ReactComponent as RoundClose } from "../../img/round_close.svg";
import { DelBtnStyle } from "../../styles/StyleComp";
import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react";

const shadowColor = "0px 2px 2px rgba(0, 0, 0, 0.4)";
const shadowColor2 = "0px 2px 2px rgba(0, 0, 0, 0.4)";

export default function DeleteBtn({ productId }) {
  const [btnFill, setBtnFill] = useState("");
  const [shadow, setShadow] = useState(shadowColor2);
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <DelBtnStyle
        shadow={shadow}
        onMouseEnter={() => setBtnFill("red")}
        onMouseLeave={() => {
          setBtnFill("black");
          setShadow(shadowColor2);
        }}
        onMouseDown={() => setShadow("none")}
        onMouseUp={() => setShadow(shadowColor)}
        onClick={() => removeItem(productId)}
      >
        <RoundClose fill={btnFill} />
      </DelBtnStyle>
    </>
  );
}
