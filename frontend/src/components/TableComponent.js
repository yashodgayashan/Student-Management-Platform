import React from "react";
import { Table, Button } from "reactstrap";
import EditdetailsModal from "./EditdetailsModal";

function TableComponent(props) {
  const user = props.users.map((user) => {
    return (
      <>
        <tr>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.password}</td>
          <td>{user.address}</td>
          <td>{user.email}</td>
          <td>{user.telnum}</td>
          <td>{user.accounttype}</td>
          <td>
            <div style={{ width: "110px" }}>
              <EditdetailsModal userData={user} />{" "}
              <Button color="danger" onClick={() => props.deleteUser(user._id)}>
                Del
              </Button>
            </div>
          </td>
        </tr>
      </>
    );
  });

  return (
    <Table dark responsive hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Password</th>
          <th>Address</th>
          <th>Email</th>
          <th>Telnum</th>
          <th>Account type</th>
        </tr>
      </thead>
      <tbody>{user}</tbody>
    </Table>
  );
}
export default TableComponent;
