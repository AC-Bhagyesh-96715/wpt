import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h3>Welcome User with ID: {id}</h3>;
}

export default User;