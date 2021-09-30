import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-gold dib br3 pa3 ma2 grow tc b--solid b--navy bw3">
      <img src={`https://robohash.org/${id}?200x200`} alt="Ryan" />
      <div>
        <h2>{name}</h2> 
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
