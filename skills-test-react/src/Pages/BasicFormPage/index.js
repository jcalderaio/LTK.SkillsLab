import React from "react";
import _ from "lodash";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "@mui/material";
import { addUser, deleteUser } from "./../../Redux/Actions/Users";

const BasicForm = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.Users);
  return (
    <div>
      <h1>Users</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          if (
            values.firstName === "" ||
            values.lastName === "" ||
            values.email === ""
          ) {
            alert("All fields are required");
            return;
          }
          dispatch(addUser(values));
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="firstName" name="firstName" placeholder="first name" />
          <Field id="lastName" name="lastName" placeholder="last name" />
          <Field id="email" name="email" placeholder="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <h2>Users List</h2>
      {!_.isEmpty(userList) && (
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Button onClick={() => dispatch(deleteUser(user.id))}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default BasicForm;
