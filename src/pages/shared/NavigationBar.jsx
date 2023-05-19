import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);

  // logout
  const handleLogout = () => {
    logout()
    .then(() => {})
    .catch(err => console.log(err));
  }
  return (
    <>
      <Navbar
        className="py-3 sticky-top bg-blur"
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ opacity: "0.94" }}
      >
        <Container>
          <NavLink to={"/"}>
            <img
              style={{ width: "7rem" }}
              src={logo}
              className="img-fluid"
              alt="Logo of this page"
            ></img>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/allToys"}
              >
                All Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/blogs"}
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link fw-bold px-3" : "nav-link px-3"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </Nav>
            <div className="d-flex align-items-center">
              {/* tooltip */}
              <ReactTooltip
                id="displayName"
                place="bottom"
                variant="info"
                content={user?.displayName}
              />
              {user && (
                <Link data-tooltip-id="displayName">
                  {user?.photoURL ? (
                    <>
                      <img
                        className="rounded-circle img-border"
                        style={{ width: "2.4rem" }}
                        src={user?.photoURL}
                        alt="user image"
                      />
                    </>
                  ) : (
                    <Button variant="warning">{user?.displayName}</Button>
                  )}
                </Link>
              )}
              {user ? (
                <Link className="btn btn-danger ms-3" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="btn btn-primary px-3" to={"/login"}>
                  Login
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
