import * as React from "react";
import { RecpieContext } from "./App";

export default function RecIngEdit({ ingredient, handleIngChange }) {
  function hc(changes) {
    handleIngChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <React.Fragment>
      <input
        type="text"
        value={ingredient.name}
        onInput={(e) => hc({ name: e.target.value })}
        className="edit-input"
      />
      <input
        type="text"
        value={ingredient.amount}
        onInput={(e) => hc({ amount: e.target.value })}
        className="edit-input"
      />
      <button className="x">&times;</button>
    </React.Fragment>
  );
}
