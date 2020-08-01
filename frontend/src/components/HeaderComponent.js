import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';


class HeaderComponent extends Component {
	
	constructor(props){
		super(props);
		this.state = {
		};
		this.handleLogOut = this.handleLogOut.bind(this);
	}


	handleLogOut(event) {
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);	
        event.preventDefault();	
	}
	
	
	render (){
		return(
			<> 
				<Navbar style={{backgroundColor: '#272c2e'}} dark expand="md"> 
				  <div className="container">
					<NavbarBrand className="mr-auto" href="/">
						<img src="" alt="Admin View" />
					</NavbarBrand>
					<Nav className="ml-auto" navbar>
                        <NavItem>
                           <Button outline color="danger" onClick={this.handleLogOut}><span className="fa fa-sign-out fa-lg"></span> Logout</Button>
                        </NavItem>
                     </Nav>
				  </div>
				</Navbar>
			</>	
		)
	}
}
export default HeaderComponent;