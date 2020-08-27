import React from "react";
import "./App.css";
import UserContextProvider from "./context/userContext";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <LoginComponent/>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
