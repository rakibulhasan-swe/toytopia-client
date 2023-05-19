import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";


const Register = () => {
  const [passwordError, setPasswordError] = useState("");

  // create user
  const handleRegister = (e) => {
    e.preventDefault();
    setPasswordError("");
    // form values
    const name = e.target.username.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photo, password);

    // validation checking
    if (password.length < 6) {
      setPasswordError("Password should be 6 characters long");
      return;
    }
    // user creation
    
    // reseting form value
    e.target.reset();
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-md-5">
            <div className="card p-4">
              <div className="text-center">
                <h3 className="fw-semibold d-text">Welcome to Signup</h3>
              </div>
              <form className="card-body" onSubmit={handleRegister}>
                <span className="fs-5 d-block pb-1">Username</span>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Photo URL</span>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo url"
                    name="photo"
                    aria-label="photo"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Email</span>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <p className="text-danger">
                  <small>{passwordError}</small>
                </p>
                <div>
                  <button
                    className={`btn btn-primary mt-3 w-100 fw-bold fs-5`}
                  >
                    Signup
                  </button>
                </div>
                <p className="text-center pt-4">
                  Already have an account?{" "}
                  <Link
                    className="fw-bold text-decoration-none d-text"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
