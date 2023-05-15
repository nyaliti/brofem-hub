import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
  };

  const handleForgotPassword = () => {
    // Navigate to the password reset page
    history.push('/reset-password');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or Username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <p>Forgot your password?</p>
        <button onClick={handleForgotPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default Login;
