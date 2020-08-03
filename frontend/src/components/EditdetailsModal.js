import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';
import { fetchUsers, editUser } from '../redux/ActionCreators'; 
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({			
	  fetchUsers: () => { dispatch(fetchUsers())},		
	  editUser: (id, username, password, address, email, telnum, type) => dispatch(editUser(id, username, password, address, email, telnum, type))
  });



class EditdetailsModal extends Component {

	 constructor(props){
		super(props);
		this.state = {
			isModalOpen: false,
			id: props.userdata.id,
			username: props.userdata.username,
			password: props.userdata.password,
			address: props.userdata.address,
			email: props.userdata.email,
			telnum: props.userdata.telnum,
			type: props.userdata.type
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this); 
	}
	
	
	
	toggleModal(){	
		this.setState({
			isModalOpen: !this.state.isModalOpen
	
	})}
	
	handleSubmit(values){
        this.toggleModal();
		this.props.editUser(this.state.id, this.state.username, this.state.password, this.state.address, this.state.email, this.state.telnum, this.state.type); 
		//send the state values because if they remain unchanged this will send the original value whereas values.x will send a blank valueif we don't fill it in.
	  
	  
  }

	
	handleInputChange(event){
        const target = event.target;    //the event’s target value
        const value = target.type === 'checkbox' ? target.checked : target.value;  //if the target type is a checkbox, get the value from target.checked if not a checkbox get from target.value
        const name = target.name;  //get the name of the target as well. target name is the same as the state properties
        this.setState({
          [name]: value
        });     
//set the value to whatever is named after the name of the form item in the state property.
        
    }

	
	render(){
		return(
			<>
				<Button color="warning" onClick={this.toggleModal}>Edit</Button> 
				 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>		
					<ModalHeader toggle={this.toggleModal}>Edit User</ModalHeader>
					<ModalBody>
						
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>	
							
							<Row className="form-group">
                                <Label htmlFor="id" md={2}>ID</Label>
                                <Col md={10}>
                                    <Control.text model=".id" id="id" name="id" value = {this.state.id}
                                        className="form-control"/>
                                </Col>
                            </Row>
							
							
							<Row className="form-group">
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Control.text model=".username" id="username" name="username" value = {this.state.username} onChange={this.handleInputChange}
                                        className="form-control"
                                     />
                                </Col>
                            </Row>
							
							<Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.text model=".password" id="password" name="password" value = {this.state.password} onChange={this.handleInputChange}
                                        className="form-control"/>
                                </Col>
                            </Row>
							
							<Row className="form-group">
                                <Label htmlFor="address" md={2}>Address</Label>
                                <Col md={10}>
                                    <Control.textarea model=".address" id="address" name="address" value = {this.state.address} onChange={this.handleInputChange}
                                        rows="2"
                                        className="form-control" />
                                </Col>
                            </Row>
							
							
							<Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" value = {this.state.email} onChange={this.handleInputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
							
							
							<Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" value = {this.state.telnum} onChange={this.handleInputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
							
							<Row className="form-group">
							   <Label htmlFor="type" md={2}>Type</Label>
							   <Col md={10}>
										<Control.select model=".type" name="type" value = {this.state.type} onChange={this.handleInputChange}
                                        className="form-control">
                                        <option>Student</option>
                                        <option>Admin</option>
                                    </Control.select>
                                </Col>
                            </Row>

							<Button type="submit" value="submit" color="primary">Submit</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
			</>
		)
	}
}
export default connect(null,mapDispatchToProps)(EditdetailsModal);		
	
	
	
	  