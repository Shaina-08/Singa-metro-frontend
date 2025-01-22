import React from 'react';

const JourneyTable = ({ journeys }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {journeys.map((journey) => (
        <tr key={journey.id}>
          <td>{journey.id}</td>
          <td>{journey.name}</td>
          <td>{journey.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default JourneyTable;
