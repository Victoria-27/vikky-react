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

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input<{ error: boolean }>`
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }

  &::placeholder {
    color: #999;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0052a3;
  }
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
      <Title>Login</Title>
      <FormContainer>
        <Label htmlFor='username'>Username:</Label>
        <Input
          type='text'
          id='username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError(false);
          }}
          placeholder='Enter your username'
          error={usernameError}
        />
        {usernameError && <ErrorText>Please enter a username</ErrorText>}
      </FormContainer>
      <FormContainer>
        <Label htmlFor='password'>Password:</Label>
        <Input
          type='password'
          id='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          placeholder='Enter your password'
          error={passwordError}
        />
        {passwordError && <ErrorText>Password must be at least 6 characters long</ErrorText>}
      </FormContainer>
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
};

export default Login;
