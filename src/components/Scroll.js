import React from "react";

const Scroll = (props) => {
  return (
    <div
      className="b--solid bw1 b--navy"
      style={{
        overflowY: "scroll",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
