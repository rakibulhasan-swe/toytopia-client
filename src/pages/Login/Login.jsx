import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Button } from "react-bootstrap";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // from - redirect
  const redirectLocation = location?.state?.from?.pathname || "/";

  // google provider
  const googleProvider = new GoogleAuthProvider();
  // github provider
  const githubProvider = new GithubAuthProvider();

  // handle google sign in
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);

        // naviagte to the location
        navigate(redirectLocation);
      })
      .catch((err) => console.log(err.message));
  };

  // handle github login
  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((res) => {
        console.log(res.user);
        navigate(redirectLocation);
      })
      .catch((err) => console.log(err?.message));
  };

  // sign in user
  const handleLogin = (e) => {
    // preventing refreshing
    e.preventDefault();
    setLoginError("");

    // form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // login user
    loginUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        // console.log(loggedUser);

        // toaster
        toast.success("Login Successfull");
        
        // redirected to main location
        navigate(redirectLocation);
      })
      .catch((err) => {
        // console.log(err?.message);
        if (err?.message) {
          setLoginError("Please insert correct email and password!");
        }
      });

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
                <Button
                  variant=""
                  className="w-100 btn-outline-primary"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle className="me-2" />
                  SignIn with google
                </Button>
              </div>
              <div>
                <Button
                  variant=""
                  className="w-100 btn-outline-primary"
                  onClick={handleGithubLogin}
                >
                  <FaGithub className="me-2" />
                  SignIn with Github
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
