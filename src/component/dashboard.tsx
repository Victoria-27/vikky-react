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
  border-collapse: collapse;
  width: 80%;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
`;

const TableData = styled.td`
  padding: 12px;
`;

const FlightDashboard: React.FC<FlightDashboardProps> = ({ flights }) => {
  return (
    <FlightDashboardContainer>
      <h2>Flight Dashboard</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Destination</TableHeader>
            <TableHeader>Departure</TableHeader>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <TableData>{flight.id}</TableData>
              <TableData>{flight.destination}</TableData>
              <TableData>{flight.departure}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </FlightDashboardContainer>
  );
};

export default FlightDashboard;
