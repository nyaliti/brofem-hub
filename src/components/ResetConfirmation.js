/* eslint-disable max-len */
import React from 'react';

const ResetConfirmation = () => {
  return (
    <div>
      <h2>Password Reset Confirmation</h2>
      <p>
        If the email you entered exists in our system, a password reset link has been sent to it.
        Please check your email and follow the instructions to reset your password.
      </p>
      <p>
        If you did not receive the email, please click <a href="#">here</a> to resend it.
      </p>
    </div>
  );
};

export default ResetConfirmation;
