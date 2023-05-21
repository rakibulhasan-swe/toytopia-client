import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCard = ({ toy }) => {
  const { _id, picture, toyName, price, rating } = toy;
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <Card className="shadow border-0">
          <Card.Img variant="top" src={picture} style={{ height: "17rem" }} />
          <Card.Body>
            <Card.Title>{toyName}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Rating
              className="pb-3"
              style={{ maxWidth: "7rem" }}
              value={rating}
              readOnly
            />
            <Link className="btn btn-primary" to={`/details/${_id}`}>
              View Details
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ShopCard;
