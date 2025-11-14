import React from "react";

const ActivityItem = ({ activity }) => (
    <div className="activity-item">
        <p><strong>{activity.type}</strong> — {activity.note}</p>
        <small>{new Date(activity.date).toLocaleString()}</small>
    </div>
);

export default ActivityItem;
