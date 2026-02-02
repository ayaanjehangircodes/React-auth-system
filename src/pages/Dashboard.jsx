import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}!</p>
      <p>This is a protected route.</p>
    </div>
  );
};

export default Dashboard;
