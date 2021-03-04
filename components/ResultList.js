import React from "react";


function ResultList(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>First Name:</strong> {props.name.first}
            </li>
            <li>
                <strong>Last Name:</strong> {props.name.last}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    );
  }
export default ResultList;


