import React, { Fragment } from "react";
import Recpie from "./Recpie";

export default function RecpieList({ recpies }) {
  console.log(recpies);
  return (
    <Fragment>
      {recpies.map((rec) => (
        <Recpie key={rec.id} {...rec} />
      ))}
    </Fragment>
  );
}
