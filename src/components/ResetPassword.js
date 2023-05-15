import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password reset logic
    // Redirect to the reset confirmation page
    history.push('/reset-confirmation');
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
