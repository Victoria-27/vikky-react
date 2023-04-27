import React, { useState } from 'react';
import styled from 'styled-components';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-weight: bold;
`;

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </LoginContainer>
  );
};

export default Login;
