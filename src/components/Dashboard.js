import React from 'react';
import {useAuth} from './AuthContext';
import AuthorDashboard from './AuthorDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
  const {currentUser} = useAuth();

  // Determine user role based on currentUser data
  const userRole = currentUser ? currentUser.role : '';

  return (
    <div>
      {userRole === 'author' && <AuthorDashboard />}
      {userRole === 'admin' && <AdminDashboard />}
      {/* Add other user roles and their corresponding components */}
    </div>
  );
};

export default Dashboard;
