import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { loginUrl } from "../shared/constants";

const HeaderComponent = (props) => {
  const handleLogOut = (event) => {
    let confirmlogout = window.confirm("Are you sure you wish to logout?");
    if (confirmlogout) {
      alert("User Logged Out");
      fetch(loginUrl + "logout")
      .then((response) => response.json())
      .then((users) => alert(JSON.stringify(users)))
      .catch((err) => console.log(err));
      props.history.push("/login");
    }
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#272c2e" }} dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="" alt="Student Management System" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button outline color="danger" onClick={handleLogOut}>
                <span className="fa fa-sign-out fa-lg"></span> Logout
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default withRouter(HeaderComponent);
