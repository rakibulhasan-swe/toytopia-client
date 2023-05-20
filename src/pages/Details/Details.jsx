import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toy = useLoaderData();
  const { picture, sellerName, toyName, price, rating, quantity, description } =
    toy;
  return (
    <>
      <div className="container py-5">
        <div className="row g-4 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <img
              src={picture}
              className="img-fluid"
              alt=""
              style={{ height: "25rem" }}
            />
          </div>
          <div className="col-md-6">
            <div>
              <div>
                <h2>{toyName}</h2>
                <h4>Price: ${price}</h4>
                <p className="py-3">{description}</p>
              </div>
              <div>
                <span className="d-block">Seller Name: {sellerName}</span>
                <span className="d-block">Available Quantity: {quantity}</span>
                <Rating
                  className="pb-3"
                  style={{ maxWidth: "7rem" }}
                  value={rating}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
