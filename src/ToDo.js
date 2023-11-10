import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

const ToDo = ({ todo, onBtnClick }) => {
  return (
    <li>
      <Link to={`${todo.id}`}>{todo.text}</Link>

      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      console.log(ownProps.todo.id);
      dispatch(actionCreators.deleteToDo(parseInt(ownProps.todo.id)));
    },
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
