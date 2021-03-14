import React, { Fragment, useContext } from "react";
import IngredientList from "./IngredientList";
import { RecpieContext } from "./App";

export default function Recpie({
  id,
  name,
  servings,
  cookTime,
  instructions,
  ingredients,
}) {
  const value = useContext(RecpieContext);

  return (
    <Fragment>
      <div className="single">
        <div>
          <h3>{name}</h3>
          <div>
            <button
              className="edit"
              onClick={() => value.handleRecpieSelect(id)}
            >
              ⚙️
            </button>
            <button
              className="delete"
              onClick={() => value.handleRecpieDelete(id)}
            >
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
