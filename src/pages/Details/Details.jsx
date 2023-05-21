import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Head from "../../Components/Head";

const Details = () => {
  const toy = useLoaderData();
  const { picture, sellerName, sellerEmail, toyName, price, rating, quantity, description } =
    toy;
  return (
    <>
      <Head title={"Details"} />
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
                <p className="py-3 lh-lg">{description}</p>
              </div>
              <div>
                <p><span className="d-text">Seller Name: </span>{sellerName}</p>
                <p><span className="d-text">Seller Email: </span>{sellerEmail}</p>
                <p><span className="d-text">Available Quantity: </span>{quantity}</p>
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
