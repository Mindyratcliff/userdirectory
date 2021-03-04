import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.results.pictures.large.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
