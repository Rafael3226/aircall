import React from "react";
import "./activity.css";
import ActivityIcons from "./ActivityIcons.jsx";

const Activity = ({ icon, number, via, date }) => {
  return (
    <div className="activity-container">
      <div className="activity-icon-container">
        <ActivityIcons tag={icon} />
      </div>
      <div className="activity-info-container">
        <span className="activity-number">{number}</span>
        <span className="activity-via">{via}</span>
      </div>
      <div className="activity-date-container">
        <span className="activity-date">{date}</span>
      </div>
    </div>
  );
};

export default Activity;
