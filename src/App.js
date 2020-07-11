import React, { useState } from "react";
import List from "./List";

export default function App() {
  let [episode, setEpisode] = useState(0);

  async function fetchData() {
    const url = "https://rickandmortyapi.com/api/episode";
    const response = await fetch(url);
    const data = await response.json();
    setEpisode(data);
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="navbar-brand">Ricky And Morty</h3>
        <button
          className="btn btn-outline-danger my-2 my-sm-0"
          onClick={fetchData}
        >
          List Down
        </button>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      <div>{episode !== 0 && <List />}</div>
    </React.Fragment>
  );
}
