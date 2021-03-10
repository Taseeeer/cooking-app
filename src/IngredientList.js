import React, { Fragment } from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ing) => {
    return <Ingredient key={ing.id} {...ing} />;
  });

  return <Fragment>{ingredientElements}</Fragment>;
}
