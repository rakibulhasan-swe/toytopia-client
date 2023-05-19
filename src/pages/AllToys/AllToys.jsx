import React from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

const AllToys = () => {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AllToys;
