import React, { Fragment } from "react";
import IngredientList from "./IngredientList";

export default function Recpie({
  id,
  name,
  servings,
  cookTime,
  instructions,
  ingredients,
  delRecpie,
}) {
  return (
    <Fragment>
      <div className="single">
        <div>
          <h3>{name}</h3>
          <div>
            <button className="edit">⚙️</button>
            <button className="delete" onClick={() => delRecpie(id)}>
              ❌
            </button>
          </div>
        </div>
        <div>
          <span>Cook Time: </span>
          <span>{cookTime}</span>
        </div>
        <div>
          <span>Servings: </span>
          <span>{servings}</span>
        </div>
        <div>
          <span>Instructions: </span>
          <div>{instructions}</div>
        </div>
        <div>
          <span>Ingredients: </span>
          <div>
            <IngredientList key={ingredients.id} ingredients={ingredients} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
