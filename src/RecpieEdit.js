import React, { Fragment, useContext } from "react";
import { RecpieContext } from "./App";
import RecIngEdit from "./RecIngEdit";
import { v4 as uuid } from "uuid";

export default function RecpieEdit({ recpie }) {
  const { handleChange, handleRecpieSelect } = useContext(RecpieContext);

  function hc(changes) {
    handleChange(recpie.id, { ...recpie, ...changes });
  }

  function handleIngChange(id, ing) {
    const newIngs = [...recpie.ingredients];
    const index = newIngs.findIndex((i) => i.id === id);
    newIngs[index] = ing;
    hc({ ingredients: newIngs });
  }

  function handleAddIng() {
    const newIng = {
      id: uuid(),
      name: "",
      amount: "",
    };

    hc({ ingredients: [...recpie.ingredients, newIng] });
  }

  return (
    <Fragment>
      <div className="r-edit">
        <div className="remove-btn">
          <button className="x" onClick={() => handleRecpieSelect(undefined)}>
            &times;
          </button>
        </div>
        <div className="edit-grid">
          <label htmlFor="name" className="edit-label">
            Name
          </label>
          <input
            type="text"
            value={recpie.name}
            onInput={(e) => hc({ name: e.target.value })}
            name="name"
            id="name"
            className="edit-input"
          />
          <label htmlFor="cook" className="edit-label">
            Cook time
          </label>
          <input
            type="text"
            value={recpie.cookTime}
            onInput={(e) => hc({ cookTime: e.target.value })}
            name="cook"
            id="cooktime"
            className="edit-input"
          />
          <label htmlFor="servings" className="edit-label">
            Servings
          </label>
          <input
            type="number"
            value={recpie.servings}
            onInput={(e) => hc({ servings: e.target.value })}
            min="1"
            name="servings"
            id="servings"
            className="edit-input"
          />
          <label htmlFor="instructions" className="edit-label">
            Instructions
          </label>
          <textarea
            value={recpie.instructions}
            onInput={(e) => hc({ instructions: e.target.value })}
            name="instructions"
          />
        </div>
        <br />
        <label className="edit-label">Ingredients</label>
        <div className="ing-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          {recpie.ingredients.map((ing) => (
            <RecIngEdit
              handleIngChange={handleIngChange}
              key={ing.id}
              ingredient={ing}
            />
          ))}
        </div>
        <div>
          <button className="add-ing" onClick={() => handleAddIng()}>
            Add Ingredient
          </button>
        </div>
      </div>
    </Fragment>
  );
}
