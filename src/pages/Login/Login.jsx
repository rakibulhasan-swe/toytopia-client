import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { userLogin } = useContext(AuthContext);
  // sign in user
  const handleLogin = (e) => {
    // preventing refreshing
    e.preventDefault();
    setLoginError("");

    // form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // login user
    userLogin(email, password)
    .then((res) => {
      // console.log(res.user);
      toast.success("Login Successfull!!");
    })
    .catch(err => {
      setLoginError("Please insert correct email and passowrd!");
    })

    // reseting form value
    e.target.reset();
  };
  return (
    <>
      <div className="container pt-4">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-md-5">
            <div className="card p-4">
              <div className="text-center">
                <h3 className="fw-semibold d-text">Welcome to Login</h3>
                <img src="" alt="" />
              </div>
              <form className="card-body" onSubmit={handleLogin}>
                <span className="fs-5 d-block pb-1">Email</span>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <p className="text-danger pt-2">
                  <small>{loginError}</small>
                </p>
                <div>
                  <button className="btn btn-primary mt-3 w-100 fw-bold fs-5">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center">or</p>
              <div className="pb-3">
                <Button variant="" className="w-100 btn-outline-primary">
                  <FaGoogle className="me-2" />
                  SignIn with google
                </Button>
              </div>
              <p className="text-center pt-4">
                Haven't an account?{" "}
                <Link
                  className="text-decoration-none d-text fw-bold"
                  to="/register"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
