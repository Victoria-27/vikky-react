import React, { useState } from 'react';

export interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div>
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
    </div>
  );
};

export default Login;
