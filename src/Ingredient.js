import React, { Fragment } from "react";

export default function Ingredient({ name, amount }) {
  return (
    <Fragment>
      <span>{name}</span>
      <span>{amount}</span>
    </Fragment>
  );
}
