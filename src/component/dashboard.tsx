import React from 'react';
import styled from 'styled-components';

export interface Flight {
  id: string;
  destination: string;
  departure: string;
}

export interface FlightDashboardProps {
  flights: Flight[];
}

const FlightDashboardContainer = styled.div`
  text-align: center;
`;

const Table = styled.table`
  margin: 0 auto;
  font-weight: bold;
`;

const FlightDashboard: React.FC<FlightDashboardProps> = ({ flights }) => {
  return (
    <FlightDashboardContainer>
      <h2>Flight Dashboard</h2>
      <Table>
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
      </Table>
    </FlightDashboardContainer>
  );
};

export default FlightDashboard;
