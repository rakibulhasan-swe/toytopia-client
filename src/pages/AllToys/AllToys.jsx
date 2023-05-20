import React from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div className="py-5 container">
      <div className="w-50 mx-auto mb-5">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Toy name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-primary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="container table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allToys?.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>
                  {toy?.subCategory.map((sc, sci) => (
                    <span key={sci}>{sc}, </span>
                  ))}
                </td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Button variant="dark">View Details</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToys;