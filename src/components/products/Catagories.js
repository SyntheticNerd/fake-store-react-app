import React from "react";
import { getProducts } from "../../utils/utils";
import { Thumbnail, CatBtn } from "../../styles/ProductStyle";
import { useNavigate } from "react-router-dom";

//--------------------Pass Router Dom Props
function withParams(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
//challenge figure out how to use navigate with class components.

class Catagories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      images: [
        "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
      ]
    };
  }
  componentDidMount() {
    getProducts("products/categories").then((res) => {
      this.setState({ categories: res });
    });
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  onClick = (category) => {
    this.props.navigate(`/catagory/${category}`);
    // this.getPicture(category);
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {this.state.categories.map((category, index) => (
            <div key={`${index}${category}`}>
              <CatBtn onClick={() => this.onClick(category)}>
                <Thumbnail url={this.state.images[index]} />
                {category}
              </CatBtn>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default withParams(Catagories);
