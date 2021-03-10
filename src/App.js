import { Fragment } from "react";
import RecpieList from "./RecpieList";

function App() {
  return (
    <Fragment>
      <RecpieList recpies={sampleData} />
    </Fragment>
  );
}

const sampleData = [
  {
    id: 1,
    name: "Chicken Jalfarezi",
    servings: 2,
    cookTime: "2:00",
    instructions: "1. Put some salt \n2. Put chicken in oven \n3. Eat it",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Kilogram",
      },
      {
        id: 2,
        name: "Salt",
        amount: "4 Tbs",
      },
      {
        id: 3,
        name: "Vinigar",
        amount: "1",
      },
    ],
  },
  {
    id: 2,
    name: "Chicken Karahi",
    servings: 3,
    cookTime: "1:15",
    instructions: "1. Put some salt \n2. Put chicken in oven \n3. Eat it",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Kilogram",
      },
      {
        id: 2,
        name: "Salt",
        amount: "4 Tbs",
      },
      {
        id: 3,
        name: "Vinigar",
        amount: "1",
      },
    ],
  },
  {
    id: 3,
    name: "Tikah",
    servings: 6,
    cookTime: "2:00",
    instructions: "1. Put some salt \n2. Put chicken in oven \n3. Eat it",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Kilogram",
      },
      {
        id: 2,
        name: "Salt",
        amount: "4 Tbs",
      },
      {
        id: 3,
        name: "Vinigar",
        amount: "1",
      },
    ],
  },
];

export default App;
