import React, { Fragment } from "react";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientList";
import RecpieList from "./RecpieList";

export default function Recpie({
  name,
  servings,
  cookTime,
  instructions,
  ingredients,
}) {
  return (
    <Fragment>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
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
    </Fragment>
  );
}
