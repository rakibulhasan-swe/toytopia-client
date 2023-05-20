import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const uri = `http://localhost:5000/mytoy?email=${user?.email}`;
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container table-responsive py-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={toy.picture} style={{ maxHeight: "2rem" }} alt="" />
                </td>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy?.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.rating}stars</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/details/${toy?._id}`}
                  >
                    Details
                  </Link>
                  <Link
                    className="btn btn-warning btn-sm mx-1"
                    to={``}
                  >
                    Update
                  </Link>
                  <Link
                    className="btn btn-danger btn-sm"
                    to={``}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MyToy;
