import React from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Image,
} from "react-bootstrap";
import "./Navbar.css";
import { NavBarLogo } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { NavBarItem } from "../utils";

function NavBar() {
  const location = useLocation();
  console.log(location.pathname, "99999999");
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              src={NavBarLogo}
              height={"50px"}
              className="rounded-circle"
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            {NavBarItem.map((item) => {
              console.log(location.pathname === item.pathName, "55555555555");
              return (
                <Nav.Link
                  to={item.pathName}
                  as={Link}
                  className={`me-2 nav-link-hover ${
                    location.pathname === item.pathName ? "nav-link-active" : ""
                  }`}
                >
                  {item.name}
                </Nav.Link>
              );
            })}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
