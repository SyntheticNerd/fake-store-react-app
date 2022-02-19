import { FrontStars } from "../../styles/StyleComp";
import { ReactComponent as Star } from "../../img/star.svg";

export default function StarReview({ rating }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", width: "125px", height: "30px" }}>
          <div>
            <Star fill="lightgrey" />
            <Star fill="lightgrey" />
            <Star fill="lightgrey" />
            <Star fill="lightgrey" />
            <Star fill="lightgrey" />
          </div>
          <FrontStars width={rating.rate * 10}>
            <div style={{ width: "125px" }}>
              <Star fill="#D4AF37" stroke="#D4AF37" />
              <Star fill="#D4AF37" stroke="#D4AF37" />
              <Star fill="#D4AF37" stroke="#D4AF37" />
              <Star fill="#D4AF37" stroke="#D4AF37" />
              <Star fill="#D4AF37" stroke="#D4AF37" />
            </div>
          </FrontStars>
        </div>
        <a style={{ paddingLeft: "4px", fontSize: ".8em" }} href="empty">
          {rating.count}
        </a>
      </div>
    </>
  );
}
//interesting challenge to load the stars
