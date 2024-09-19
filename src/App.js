
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeTable from './components/employee/EmployeeTable';
import Login from './components/Login';

import UserForm from './components/employee/UserForm';
import Hovers from './components/hovers/Hovers';
import Validation from './components/validation/Validation';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <Router>
  <div className="app-container">
 
    <Routes>
   <Route path="/" element={<Login />} />
    <Route path="/employeeTable" element={<EmployeeTable />} />
      <Route path="/useform" element={<UserForm />} />
      <Route path="/hovers" element={<Hovers/>} />
      <Route path="/validation" element={<Validation/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/useform/:userid" element={<UserForm />} />       
  </Routes>
  </div>
</Router>
  );
}

export default App;
