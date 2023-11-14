import React from "react";

function Cards({ image, name, memory, price, rating }) {

  return (
    <>
      <div className="wrapper">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="card-body">
          <h1>{name}</h1>
          <p>{memory}</p>
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
