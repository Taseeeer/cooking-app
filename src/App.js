import { createContext, Fragment, useEffect, useState } from "react";
import RecpieList from "./RecpieList";
import "./app.css";
import { v4 as uuid } from "uuid";
import RecpieEdit from "./RecpieEdit";

export const RecpieContext = createContext();

function App() {
  const [recpieId, setRecpieId] = useState();
  const [recpies, setRecpies] = useState(sampleData);

  const selectRecpie = recpies.find((rec) => rec.id === recpieId);
  console.log(selectRecpie);
  const recpieContextValue = {
    handleRecpieAdd,
    handleRecpieDelete,
    handleRecpieSelect,
    handleChange,
  };

  useEffect(() => {
    setRecpies(JSON.parse(localStorage.getItem("cookings")));
  }, []);

  useEffect(() => {
    localStorage.setItem("cookings", JSON.stringify(recpies));
  }, [recpies]);

  function handleChange(id, recpie) {
    const newRecpies = [...recpies];
    const index = newRecpies.findIndex((r) => r.id === id);
    newRecpies[index] = recpie;
    setRecpies(newRecpies);
  }

  function handleRecpieSelect(id) {
    setRecpieId(id);
  }

  function handleRecpieAdd() {
    const newRecpie = {
      id: uuid(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuid(),
          name: "",
          amout: "",
        },
      ],
    };

    setRecpieId(newRecpie.id);
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
      <RecpieContext.Provider value={recpieContextValue}>
        <div className="single">
          <RecpieList recpies={recpies} />
          {selectRecpie && <RecpieEdit recpie={selectRecpie} />}
        </div>
      </RecpieContext.Provider>
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
