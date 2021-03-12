import React, { Fragment, useContext } from "react";
import Recpie from "./Recpie";
import { RecpieContext } from "./App";

export default function RecpieList({ recpies }) {
  const value = useContext(RecpieContext);
  return (
    <Fragment>
      <div className="rec-left">
        {recpies.map((rec) => (
          <Recpie key={rec.id} {...rec} />
        ))}
        <button className="recpie" onClick={value.handleRecpieAdd}>
          Add Recpie 🍕
        </button>
      </div>
    </Fragment>
  );
}
