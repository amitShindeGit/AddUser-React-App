import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [errorOccured, setErrorOccured] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorOccured(true);
      return;
    }

    if (+enteredAge < 1) {
      setErrorOccured(true);
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const addUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorFalseHandler = (props) => {
      setErrorOccured(false);
  };

  return (
    <div>
      {errorOccured ? (
        <ErrorModal
          title="An erro occured"
          message="Please enter correct data"
          onClick={errorFalseHandler}
        />
      ) : (
        <Card className={classes.input}>
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">User</label>
            <input
              id="name"
              value={enteredUserName}
              type="text"
              onChange={addUserNameHandler}
            ></input>
            <label htmlFor="age">Age</label>
            <input
              id="age1"
              value={enteredAge}
              type="number"
              onChange={addAgeHandler}
            ></input>

            <Button type="submit">Add Users</Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddUser;
