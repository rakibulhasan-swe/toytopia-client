import React, { useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Head from "../../Components/Head";

const AllToys = () => {
  const allToys = useLoaderData();
  const [toys, setToys] = useState(allToys);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/search/${e.target.toyName.value}`)
    .then(res => res.json())
    .then(data => setToys(data))
    .catch(err => console.log(err))

    // reseting form
    e.target.reset();
  }
  return (
    <div className="py-5 container">
      <Head title={"All toys"} />
      <Form className="w-50 mx-auto mb-5" onSubmit={handleSearch}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Toy name"
            name="toyName"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            required
          />
          <Button type="submit" variant="outline-primary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Form>
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
            {toys?.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy?.sellerName}</td>
                <td>{toy?.toyName}</td>
                <td>
                  {toy?.subCategory}
                </td>
                <td>${toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>
                  <Link className="btn btn-primary" to={`/details/${toy?._id}`}>
                    View Details
                  </Link>
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
