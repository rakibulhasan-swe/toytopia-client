import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateToy = () => {
    const navigate = useNavigate();
  const toy = useLoaderData();
  const {
    _id,
    toyName,
    picture,
    subCategory,
    price,
    rating,
    quantity,
    description,
    sellerName,
    sellerEmail,
  } = toy || {};

  const updateToy = (e) => {
    // prevent refreshing
    e.preventDefault();

    // getting form data
    const toyName = e.target.toyName.value;
    const picture = e.target.picture.value;
    const subCategory = e.target.subCategory.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;

    const newToy = {
      toyName,
      picture,
      sellerName,
      sellerEmail,
      price,
      subCategory,
      rating,
      quantity,
      description,
    };

    // console.log(newToy);

    // send to server
    fetch(`http://localhost:5000/updatetoy/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Your toys has been updated!", {
            icon: "success",
          });
          // navigate to previous page
          navigate("/mytoys", {replace: true});
        }
      })
      .catch((err) => console.log(err));

    // form value reset
    e.target.reset();
  };
  return (
    <div className="container py-5">
      <div className="w-75 mx-auto bg-light p-5">
        <Form onSubmit={updateToy}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Toy Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="toyName"
                    defaultValue={toyName}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control
                    type="text"
                    name="picture"
                    defaultValue={picture}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Seller Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="sellerName"
                    defaultValue={sellerName}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Seller Name</Form.Label>
                  <Form.Control
                    type="email"
                    name="sellerEmail"
                    defaultValue={sellerEmail}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Sub category</Form.Label>
                  <Form.Control
                    type="text"
                    name="subCategory"
                    defaultValue={subCategory}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    defaultValue={price}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Available Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="quantity"
                    defaultValue={quantity}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="container">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="description"
                placeholder="Description"
                defaultValue={description}
                required
              />
            </Form.Group>
          </div>

          <div className="container">
            <Button className="w-100 py-2" variant="primary" type="submit">
              Update Toy
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateToy;
