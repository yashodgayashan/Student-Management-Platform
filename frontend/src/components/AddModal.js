import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors, Form } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class AddModal extends Component {

	 constructor(props){
		super(props);
		this.state = {
			isModalOpen: false
		};
		this.toggleModal = this.toggleModal.bind(this);
	}
	
	
	
	toggleModal(){	
		this.setState({
			isModalOpen: !this.state.isModalOpen
	
	})}
	
	handleSubmit(values){
        this.toggleModal();
        this.props.postUser(values.username, values.password, values.address, values.email, values.telnum, values.type); 
    }
	
	
	
	render(){
		return(
			<>
				<Button outline onClick={this.toggleModal}>Add User</Button> 
				 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>		
					<ModalHeader toggle={this.toggleModal}>New User</ModalHeader>
					<ModalBody>
						
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>	
				
							<Row className="form-group">
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Enter Username"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(20)
                                        }}		
                                         />
                                    <Errors
                                        className="text-danger"		
                                        model=".username"		
                                        show="touched"			
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 20 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
							
							<Row className="form-group">
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="Enter Password"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}		
                                         />
                                    <Errors
                                        className="text-danger"		
                                        model=".password"		
                                        show="touched"			
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
							
							<Row className="form-group">
                                <Label htmlFor="address" md={2}>Address</Label>
                                <Col md={10}>
                                    <Control.textarea model=".address" id="address" name="address"
                                        rows="2"
                                        className="form-control" />
                                </Col>
                            </Row>
							
							
							<Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
							
							
							<Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 numbers ',
                                            maxLength: 'Must be 15 numbers or less ',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
							
							<Row className="form-group">
							   <Label htmlFor="type" md={2}>Type</Label>
							   <Col md={10}>
										<Control.select model=".type" name="type"	
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
export default AddModal; 
	
	
	
	
	  