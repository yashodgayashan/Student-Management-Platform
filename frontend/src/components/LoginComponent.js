import React, { useState, useEffect, useRef } from "react";
import { Button, Row, Col, Label } from "reactstrap";
import StudentComponent from "./StudentComponent";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminComponent from "./AdminComponent";
import { withRouter } from "react-router-dom";
import { loginUrl, baseUrl } from "../shared/constants";

const required = (val) => val && val.length;

function LoginComponent(props) {
  const [login, setLogin] = useState({
    approved: false,
    Account_Type: "",
    id: "",   //ID is only needed for the student type accounts. For admin it will be kept blank
  });
  const [userData, setUserData] = useState([]);
  const didMountRef = useRef(false);    //to make sure that useEffect doesnt run on mount

  const handleSubmit = (values) => {
    fetch(loginUrl + "login/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        checkType(item);
      })
      .catch((err) => alert(err));
  };

  const checkType = (item) => {       //setting the state dependant on admin or student type account
    if (item.approved != true) {
      alert("Incorrect Username or Password");
    } else if (item.Account_Type == "admin") {
      setLogin({
        ...login,
        approved: item.approved,
        Account_Type: item.Account_Type,
        id: "",
      });
    } else {
      setLogin({
        ...login,
        approved: item.approved,
        Account_Type: item.Account_Type,
        id: item.record_Id,
      });
    }
  };

  useEffect(() => {       //when the state changes this will run to check if type is student, if so                    
    if (didMountRef.current) {    //fetch stdeunt data and set to userData state
      if (login.approved === true && login.Account_Type === "student") {
        fetch(baseUrl + login.id.toString())
          .then((response) => response.json())
          .then((users) => setUserData(users))
          .catch((err) => console.log(err)); 
          props.history.push("/student");   
      } else if (login.Account_Type === "admin" && login.approved === true) {
        props.history.push("/admin");     //else route to admin
      } else {
        alert("Incorrect Username or Password Entered");
      }
    } else didMountRef.current = true;
  }, [login]);

  const Login = () => {
    return (
      <div className="container">
        <nav class="navbar navbar-dark bg-primary">
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
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/login" component={Login} />
            {login.approved && login.Account_Type === "admin" && (
              <Route path="/admin" component={() => <AdminComponent />} />
            )}
            {login.approved && login.Account_Type === "student" && (
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
