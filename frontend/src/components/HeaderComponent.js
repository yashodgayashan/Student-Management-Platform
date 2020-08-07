import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

const HeaderComponent = () => {
  /*const [status, setStatus] = useState({username:'', remember:false})
	const handleLogOut = (event) => {
        alert("Username: " + username.value + " Password: " + this.password.value
            + " Remember: " + remember.checked);	
        event.preventDefault();	
	}*/

  const handleLogOut = (event) => {
    alert("User Logged Out");
    event.preventDefault();
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#272c2e" }} dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="" alt="Admin View" />
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
export default HeaderComponent;