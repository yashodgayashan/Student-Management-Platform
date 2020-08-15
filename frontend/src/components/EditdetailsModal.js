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
    id: props.userData.id,
    username: props.userData.username,
    password: props.userData.password,
    address: props.userData.address,
    email: props.userData.email,
    telnum: props.userData.telnum,
    type: props.userData.type,
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
              <Label htmlFor="id" md={2}>
                ID
              </Label>
              <Col md={10}>
                <Control.text
                  model=".id"
                  id="id"
                  name="id"
                  value={userData.id}
                  className="form-control"
                />
              </Col>
            </Row>

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
              <Label htmlFor="type" md={2}>
                Type
              </Label>
              <Col md={10}>
                <Control.select
                  model=".type"
                  name="type"
                  value={userData.type}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option>Student</option>
                  <option>Admin</option>
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