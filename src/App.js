import { Fragment, useState } from "react";
import RecpieList from "./RecpieList";
import "./app.css";
import { v4 as uuid } from "uuid";

function App() {
  const [recpies, setRecpies] = useState(sampleData);

  function handleRecpieAdd() {
    const newRecpie = {
      id: uuid(),
      name: "name",
      servings: 1,
      cookTime: "1:00",
      instructions: "inst",
      ingredients: [
        {
          id: uuid(),
          name: "ing",
          amout: "1tb spoon",
        },
      ],
    };
    setRecpies([...recpies, newRecpie]);
  }

  function handleRecpieDelete(id) {
    const newRecpies = recpies.filter((rec) => rec.id !== id);
    setRecpies(newRecpies);
  }

  return (
    <Fragment>
      <div className="title">
        <h1>The cooking recpie</h1>
      </div>
      <div className="single">
        <RecpieList
          addRecpie={handleRecpieAdd}
          delRecpie={handleRecpieDelete}
          recpies={recpies}
        />
      </div>
    </Fragment>
  );
}

const sampleData = [
  {
    id: 1,
    name: "Chicken Jalfarezi",
    servings: 2,
    cookTime: "2:00",
    instructions: "1. Put some salt\n2. Put chicken in oven \n3. Eat it",
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
