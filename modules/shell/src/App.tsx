import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import { Module } from "./entity/module";

function App() {
  const modules = useLoaderData() as Module[];

  const [count, setCount] = useState(0);

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            {modules.map((module) => (
              <li key={module.name}>
                <Link to={module.name}>{module.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="module">
        <Outlet context={{ modules, count, setCount }} />
      </div>
    </>
  );
}

export default App;
