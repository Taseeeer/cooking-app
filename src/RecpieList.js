import React, { Fragment } from "react";
import Recpie from "./Recpie";

export default function RecpieList({ recpies, addRecpie, delRecpie }) {
  return (
    <Fragment>
      <div className="rec-left">
        {recpies.map((rec) => (
          <Recpie key={rec.id} {...rec} delRecpie={delRecpie} />
        ))}
        <button className="recpie" onClick={addRecpie}>
          Add Recpie 🍕
        </button>
      </div>
    </Fragment>
  );
}
