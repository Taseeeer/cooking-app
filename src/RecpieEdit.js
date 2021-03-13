import React, { Fragment } from "react";
import RecIngEdit from "./RecIngEdit";

export default function RecpieEdit() {
  return (
    <Fragment>
      <div className="r-edit">
        <div className="remove-btn">
          <button className="x">&times;</button>
        </div>
        <div className="edit-grid">
          <label htmlFor="name" className="edit-label">
            Name
          </label>
          <input type="text" name="name" id="name" className="edit-input" />
          <label htmlFor="cook" className="edit-label">
            Cook time
          </label>
          <input type="text" name="cook" id="cooktime" className="edit-input" />
          <label htmlFor="servings" className="edit-label">
            Servings
          </label>
          <input
            type="number"
            min="1"
            name="name"
            id="servings"
            className="edit-input"
          />
          <label htmlFor="instructions" className="edit-label">
            Instructions
          </label>
          <textarea name="instructions" />
        </div>
        <br />
        <label className="edit-label">Ingredients</label>
        <div className="ing-grid">
          <div>Name</div>
          <div>Amount</div>
          <div></div>
          <RecIngEdit />
          <RecIngEdit />
        </div>
        <div>
          <button className="add-ing">Add Ingredient</button>
        </div>
      </div>
    </Fragment>
  );
}
