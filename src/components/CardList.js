import React from "react";
import Card from "./Card.js";

const CardList = ({ robots }) => {
  //FUNCTION
  const cardArray = robots.map((user, i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
  //RETURN OUTPUT
  return <div>{cardArray}</div>;
};

export default CardList;
