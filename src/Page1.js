import React from "react";

export default function Page1(props) {

  return (
    <React.Fragment>
      <ul>
        {props.list.results.map((ep, index) => {
          return (
            <React.Fragment>
              <li key={index + 10}>
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
