import React from 'react'
import { UserAuth } from '../../Context/AuthContext';
import { Redirect } from "react-router-dom"


const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
      return <Redirect push to="/" />;
    } else {
      return children;
    }
  };

export default ProtectedRoute