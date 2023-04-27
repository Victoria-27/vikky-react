import React from 'react';

export interface Flight {
  id: string;
  destination: string;
  departure: string;
}

export interface FlightDashboardProps {
  flights: Flight[];
}

const FlightDashboard: React.FC<FlightDashboardProps> = ({ flights }) => {
  return (
    <div>
      <h2>Flight Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destination</th>
            <th>Departure</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.destination}</td>
              <td>{flight.departure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightDashboard;
