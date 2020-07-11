import React, {useState} from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
export default function List() {
  let [episode1, setEpisode1] = useState(0);
  let [episode2, setEpisode2] = useState(0);
  
  async function fetchPage1() {
    const url = "https://rickandmortyapi.com/api/episode?page=1";
    const response = await fetch(url);
    const data = await response.json();
    setEpisode1(data);
  }

  async function fetchPage2() {
    const url = "https://rickandmortyapi.com/api/episode?page=2";
    const response = await fetch(url);
    const data = await response.json();
    setEpisode2(data);
  }

  return (
    <React.Fragment>
      <Router>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="/page1" onClick={fetchPage1}>
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/page2" onClick={fetchPage2}>
                2
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/page1">
              <div>{episode1 !==0 && <Page1 list={episode1}/>}</div>
          </Route>
          <Route path="/page2">
              <div>{episode2 !==0 && <Page2 list={episode2}/>}</div>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
