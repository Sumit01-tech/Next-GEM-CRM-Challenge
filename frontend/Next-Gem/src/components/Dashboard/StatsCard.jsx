import React from "react";

const StatsCard = ({ title, value }) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};

export default StatsCard;
