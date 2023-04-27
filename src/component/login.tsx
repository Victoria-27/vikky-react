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

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (!username) {
      setUsernameError(true);
    }
    if (password.length < 6) {
      setPasswordError(true);
    }
    if (username && password.length >= 6) {
      onLogin(username, password);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError(false);
          }}
          style={{ border: usernameError ? '1px solid red' : '1px solid black' }}
        />
        {usernameError && <ErrorText>Please enter a username</ErrorText>}
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          style={{ border: passwordError ? '1px solid red' : '1px solid black' }}
        />
        {passwordError && <ErrorText>Password must be at least 6 characters long</ErrorText>}
      </div>
      <button onClick={handleLogin}>Login</button>
    </LoginContainer>
  );
};

export default Login;
