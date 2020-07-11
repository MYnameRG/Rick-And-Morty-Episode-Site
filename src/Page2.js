import React from "react";

export default function Page2(props) {

  return (
    <React.Fragment>
      <ul>
        {props.list.results.map((ep, index) => {
          return (
            <React.Fragment>
              <li key={index}>
                Name: {ep.name}
                <br />
                Episode: {ep.episode}
                <br />
                Date: {ep.air_date}
              </li>
              <hr />
            </React.Fragment>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
