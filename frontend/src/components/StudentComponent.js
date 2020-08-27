import React, { useState, useContext } from "react";
import { Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { userContext } from "../context/userContext";
import HeaderComponent from "./HeaderComponent";

function StudentComponent(props) {
  const { editUser } = useContext(userContext);
  const [userData, setUserdata] = useState({
    _id: props.userData._id,
    name: props.userData.name,
    username: props.userData.username,
    password: props.userData.password,
    address: props.userData.address,
    email: props.userData.email,
    telnum: props.userData.telnum,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setUserdata({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (values) => {
    editUser(userData);
  };

  return (
    <div className='container'>
      <div>
        <HeaderComponent />
      </div>
      <div className="col-12 col-md-9 mt-3">
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

          <Button type="submit" value="submit" color="primary">
            Submit
          </Button>
        </LocalForm>
      </div>
    </div>
  );
}
export default StudentComponent;
