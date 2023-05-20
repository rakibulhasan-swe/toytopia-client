import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const createNewToy = (e) => {
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
      sellerName: user?.displayName,
      sellerEmail: user?.email,
      price,
      subCategory,
      rating,
      quantity,
      description
    };

    // console.log(newToy);

    // send to server
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          swal("Good job!", "A new toy created!", "success");
        }
      })
      .catch((err) => console.log(err));

    // form value reset
    e.target.reset();
  };
  return (
    <div className="container py-5">
      <div className="w-75 mx-auto bg-light p-5">
        <Form onSubmit={createNewToy}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Toy Name</Form.Label>
                  <Form.Control type="text" name="toyName" required />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Picture</Form.Label>
                  <Form.Control type="text" name="picture" required />
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
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Seller Name</Form.Label>
                  <Form.Control
                    type="email"
                    name="sellerEmail"
                    defaultValue={user?.email}
                    readOnly
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
                  <Form.Control type="text" name="subCategory" required />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" name="price" required />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control type="text" name="rating" required />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Available Quantity</Form.Label>
                  <Form.Control type="text" name="quantity" required />
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
              />
            </Form.Group>
          </div>

          <div className="container">
            <Button className="w-100 py-2" variant="primary" type="submit">
              Add New Toy
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddToy;
