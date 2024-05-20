import React from "react";
import PropTypes from "prop-types"

const Card = (props) => {
  return (
    <div className="card container">
      <img
        src={props.imageURL}
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          {props.description}
        </p>
      </div>
      <div class="card-footer text-body-secondary">
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,

};

export default Card;
