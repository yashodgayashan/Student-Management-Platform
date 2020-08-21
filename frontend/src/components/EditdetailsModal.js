import React, { useState, useContext } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { userContext } from "../context/userContext";

function EditdetailsModal(props) {
  const { editUser } = useContext(userContext);

  const [userData, setUserdata] = useState({
    _id: props.userData._id,
    username: props.userData.username,
    name: props.userData.name,
    password: props.userData.password,
    address: props.userData.address,
    email: props.userData.email,
    telnum: props.userData.telnum,
    accounttype: props.userData.accounttype,
  });

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUserdata({
      ...userData,
      [name]: value, 
    });
  };

  const handleSubmit = (values) => {
    toggle();
    editUser(userData);
  };

  return (
    <>
      <Button color="warning" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>

            <Row className="form-group">
              <Label htmlFor="username" md={2}>
                Username
              </Label>
              <Col md={10}>
                <Control.text
                  model=".username"
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="name" md={2}>
                Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="password" md={2}>
                Password
              </Label>
              <Col md={10}>
                <Control.text
                  model=".password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="address" md={2}>
                Address
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".address"
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                  rows="2"
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telnum"
                  id="telnum"
                  name="telnum"
                  value={userData.telnum}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="accounttype" md={2}>
                Ac. Type
              </Label>
              <Col md={10}>
                <Control.select
                  model=".accounttype"
                  name="accounttype"
                  value={userData.accounttype}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option>student</option>
                  <option>admin</option>
                </Control.select>
              </Col>
            </Row>

            <Button type="submit" value="submit" color="primary">
              Submit
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  );
}
export default EditdetailsModal;