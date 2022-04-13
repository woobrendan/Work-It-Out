import React from "react";
import "./styles/statList.css";
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table';

export default function StatTable(props) {
  return (
    <Table responsive striped bordered size="md">
      <thead className="thead-dark">
        <tr>
          <th></th>
        {Array.from({length: props.list.length}).map((_, index) => (
          <th key={index}>{props.list[index].name}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Weight(lbs)</td>
          {Array.from({length: props.list.length}).map((_, index) => (
            <td key={index}>{props.list[index].weight}</td>
          ))}
      </tr>
      <tr>
        <td>Reps</td>
          {Array.from({length: props.list.length}).map((_, index) => (
            <td key={index}>{props.list[index].user_reps}</td>
          ))}
      </tr>
      <tr>
        <td>Sets</td>
          {Array.from({length: props.list.length}).map((_, index) => (
            <td key={index}>{props.list[index].user_sets}</td>
          ))}
      </tr>
       </tbody>
     </Table>
  );
}
