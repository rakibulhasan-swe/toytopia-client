import React from "react";
import { Button, Card } from "react-bootstrap";

const ShopCard = ({ toy }) => {
  const { _id, picture, toyName, price, rating } = toy;
  return (
    <>
      <div className="col-md-6">
        <Card>
          <Card.Img variant="top" src={picture} style={{height: "14rem"}} />
          <Card.Body>
            <Card.Title>{toyName}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ShopCard;
