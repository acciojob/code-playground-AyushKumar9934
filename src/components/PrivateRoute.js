import React from 'react'
import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLogin, children }) => {
    return isLogin ? children : <Navigate to="/login" replace />;
  };
export default PrivateRoute