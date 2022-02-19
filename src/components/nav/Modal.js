import React from "react";
import ReactDOM from "react-dom";

const body = document.querySelector("body");

const screenBlur = {
  height: "inherit",
  width: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  // position: "-webkit-sticky",
  position: "fixed",
  zIndex: "2",
  yop: "0",
  left: "0",
  overflow: "none"
};

const modalDefaultStyle = {
  width: "60vw",
  height: "80vh",
  backgroundColor: "white",
  borderRadius: ".2em",
  zIndex: "3",
  overflowX: "hidden",
  position: "fixed",
  margin: "auto",
  overflowY: "auto",
  padding: "32px",
  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)"
};

const modalContainer = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  top: "0px",
  left: "0px",
  justifyContent: "center",
  alignItems: "center"
};

class ModalClass extends React.Component {
  componentDidMount() {
    console.log(this.props.show);
    this.props.show
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }
  componentDidUpdate() {
    console.log(this.props.show);
    this.props.show
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }

  render() {
    return (
      <>
        {this.props.show && (
          <div style={modalContainer}>
            <div style={screenBlur} onClick={this.props.onClose}></div>
            <div style={modalDefaultStyle}>{this.props.children}</div>
          </div>
        )}
      </>
    );
  }
}

export default ModalClass;
