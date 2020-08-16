import React, { useState } from "react";
import { Button, Row, Col, Label } from "reactstrap";
import StudentComponent from "./StudentComponent";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminComponent from "./AdminComponent";
import { withRouter } from "react-router-dom";

const required = (val) => val && val.length;

function LoginComponent(props) {
  const [login, setLogin] = useState({
    approved: true,
    type: "admin"
  });
  const [userData, setUserData] = useState({});

  const handleSubmit = (values) => {
    if (login.type === "admin" && login.approved === true){
      props.history.push("/admin");
    } 
    else if (login.type === "student" && login.approved === true){
      
      props.history.push("/student");
    } else{
      alert('Incorrect Username or Password Entered')
    }

    /*setLogin({
      ...login,
      approved: true,
      type:"admin",
      userdata: {}
    });
    alert(JSON.stringify(login));
    alert(JSON.stringify(values));
    */
    
    fetch("http://localhost:3000/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((item) => {
        //checkType(item);
        alert(JSON.stringify(item));
        console.log(JSON.stringify(item))
      })
      .catch((err) => alert(err));
  };

  /*const checkType = (item) => {
    if (item.approved != true) {
      alert("Incorrect Username or Password");
    } else if (item.type == "admin") {
      setLogin({
        ...login,
        approved: item.approved,
        type: item.type,
      });
    } else {
      setLogin({
        ...login,
        approved: item.approved,
        type: item.type,
      });
    fetch("http://localhost:3000/students/" + id.toString())
      .then((response) => response.json())
      .then((users) => setUserData(users))
      .catch((err) => console.log(err));
    }
  };*/

  const Login = () => {
    return (
      <div className="container">
      <nav class = "navbar navbar-dark bg-primary">
         <div className="row col-12 d-flex justify-content-center text-white">
          <span className="h3">Login</span>   
         </div>
        </nav>
      <div className="col-12 col-md-9">
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <Row className="form-group">
          <Label htmlFor="username" md={4}>
            Username:
          </Label>
          <Col md={10}>
            <Control.text
              model=".username"
              id="username"
              name="username"
              placeholder="Enter Username"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".username"
              show="touched"
              messages={{
                required: "Required ",
              }}
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Label htmlFor="password" md={4}>
            Password:
          </Label>
          <Col md={10}>
            <Control.text
              model=".password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".password"
              show="touched"
              messages={{
                required: "Required ",
              }}
            />
          </Col>
        </Row>
        <Button type="submit" value="submit" color="primary">
          Submit
        </Button>
      </LocalForm>
      </div>
      </div>
      
    )
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/login" component={Login} />
            {login.approved && login.type === "admin" && (
              <Route path="/admin" component={() => <AdminComponent />} />
            )}
            {login.approved && login.type === "student" && (
              <Route
                path="/student"
                component={() => <StudentComponent userData={userData} />}
              />
            )}
            <Redirect to="/login" />
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default withRouter(LoginComponent);
