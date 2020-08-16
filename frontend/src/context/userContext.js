import React, { createContext, useState } from "react";
//import { baseUrl } from "../shared/constants";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  };

  const addUserToState = (user) => {
    setUsers([...users, user]);
  };

  const updateState = (user) => {
    const userIndex = users.findIndex((data) => data.id === user.id);
    const newArray = [
      ...users.slice(0, userIndex),
      user,
      ...users.slice(userIndex + 1),
    ];
    setUsers(newArray);
  };

  const deleteUserFromState = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const addUser = (values) => {
    fetch("http://localhost:3000/students/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //id: uuid(), added by the react form
        name: values.name,
        username: values.username,
        password: values.password,
        address: values.address,
        email: values.email,
        telnum: values.telnum,
        accounttype: values.accounttype,
      }),
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((item) => {
        alert(JSON.stringify(item));
        console.log(item);
        addUserToState(item);
      })
      .catch((err) => alert(err));
  };

  const editUser = (userdata) => {
    fetch("http://localhost:3000/students/" + userdata.id.toString(), {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userdata.name,
        username: userdata.username,
        password: userdata.password,
        address: userdata.address,
        email: userdata.email,
        telnum: userdata.telnum,
        accounttype: userdata.accounttype,
      }),
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((item) => {
        updateState(item);
      })
      .catch((err) => alert("error"));
  };

  const deleteUser = (id) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch("http://localhost:3000/students/" + id.toString(), {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'same-origin'
      })
        .then((response) => response.json())
        .then((item) => {
          deleteUserFromState(id);
        })
        .catch((err) => alert("error"));
    }
  };

  return (
    <userContext.Provider
      value={{ users, getUsers, addUser, deleteUser, editUser }}
    >
      {props.children}
    </userContext.Provider>
  );
};
export default UserContextProvider;
