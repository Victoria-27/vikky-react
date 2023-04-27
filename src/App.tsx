import React, { useState } from 'react';
import components from './component';
import { Flight } from './component';

const {
  Login,
  FlightDashboard,
} = components;

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleLogin = () => {
    // Perform login authentication logic here
    // For simplicity, let's assume the login is successful
    setIsLoggedIn(true);

    // Fetch flight data from API or any data source
    const dummyFlights: Flight[] = [
      { id: '1', destination: 'New York', departure: '2023-04-27 10:00 AM' },
      { id: '2', destination: 'London', departure: '2023-04-27 12:00 PM' },
      { id: '3', destination: 'Tokyo', departure: '2023-04-27 02:00 PM' },
    ];

    setFlights(dummyFlights);
  };

  return <div>{!isLoggedIn ? <Login onLogin={handleLogin} /> : <FlightDashboard flights={flights} />}</div>;
};

export default App;
