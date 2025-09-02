import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const [goals, setGoals] = React.useState(["Item 1", "Item 2"]);

  function addGoal(event) {
    event.preventDefault();

    const goal = event.target.goal.value;

    console.log("goals:", goals);
    console.log("goal:", goal);

    const updatedGoalsArray = [...goals, goal];

    console.log("updateGoalsArray:", updatedGoalsArray);
    setGoals(updatedGoalsArray);
  }

  function deleteGoals(index) {
    setGoals((prev) =>
      prev.filter((goal, goalsIdx) => {
        if (goalsIdx !== index) return goal;
      })
    );
  }

  return (
    <>
      <h1>Goal Tracker App</h1>
      <form onSubmit={addGoal}>
        <input type="text" id="goal" />
        <button type="submit">Add Goal</button>
      </form>

      {/* Display the goals */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {goals.map((goal, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              {goal}
              <button
                onClick={() => deleteGoals(index)}
                style={{ marginLeft: 10 }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
