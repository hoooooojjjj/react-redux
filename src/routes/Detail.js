import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDo }) => {
  const id = useParams();
  return (
    <div>
      <h1>{toDo[0].text}</h1>
      <h5>Created at: {id.id}</h5>
    </div>
  );
};

function mapStateToProps(state) {
  return { toDo: state };
}

export default connect(mapStateToProps)(Detail);
