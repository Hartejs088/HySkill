import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const AnalyticsDashboard = () => {
  const [data, setData] = useState({ totalUsers: 0, totalChats: 0, totalCalls: 0, topSkills: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/analytics");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>HySkill Analytics Dashboard</h2>

      <div style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
        <div>Total Users: {data.totalUsers}</div>
        <div>Total Chats: {data.totalChats}</div>
        <div>Total Video Calls: {data.totalCalls}</div>
      </div>

      <h3>Top Skills</h3>
      <BarChart width={600} height={300} data={data.topSkills}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#013e38" />
      </BarChart>
    </div>
  );
};

export default AnalyticsDashboard;
