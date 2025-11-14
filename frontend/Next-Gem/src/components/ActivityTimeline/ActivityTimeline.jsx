import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityTimeline = ({ activities = [] }) => {
    return (
        <div>
            <h3>Activity Timeline</h3>
            {activities.length ? (
                activities.map((act, i) => <ActivityItem key={i} activity={act} />)
            ) : (
                <p>No activities yet</p>
            )}
        </div>
    );
};

export default ActivityTimeline;
