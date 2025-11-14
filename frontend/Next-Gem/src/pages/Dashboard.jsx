import React from "react";
import StatsCard from "../components/Dashboard/StatsCard";

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <div className="stats-grid">
                <StatsCard title="Total Leads" value={24} />
                <StatsCard title="Closed Deals" value={10} />
                <StatsCard title="Pending Tasks" value={5} />
            </div>
        </div>
    );
};

export default Dashboard;
