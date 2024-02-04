import React from "react";
import "./Cards.scss";

const Cards = (props) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <img
            src={props.images}
            className="card-img-top "
            style={{ maxWidth: "40%", height: "auto" }}
            alt={props.alt}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p>
              <span className="old-price">
                {props.dollar}
                {props.oldPrice}
              </span>
              <span className="new-price">
                {props.dollar}
                {props.newPrice}
              </span>
            </p>
            <p className="card-text">
              <small className="text-muted">Ecpires On {props.exp_Date}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
