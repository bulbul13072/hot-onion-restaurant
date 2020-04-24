import React from 'react';
import './BreakFast.css';

const BreakFast = (props) => {
  const { Name, category, description, detail, image, price, key } = props.food;
  return (
    <div>
      <div className="container">
        <div className="d-flex">
        <div className="row">
            <div className="col-md-4">
              <img src={image} alt="Food Image"/>
              <h4>{Name}</h4>
              <p>{description}</p>
              <h3>{price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakFast;