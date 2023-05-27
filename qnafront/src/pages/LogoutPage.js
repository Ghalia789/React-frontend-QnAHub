import React, { useEffect } from 'react';

const LogoutPage = () => {
  useEffect(() => {
    // Simulating the logout process
    // You can perform any necessary logout actions here (e.g., clearing session data)

    // Redirecting to the home page after logout
    window.location.href = '/';
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>You have been logged out</h2>
      <p>Thank you for using our application.</p>
    </div>
  );
};

export default LogoutPage;
