import { Avatar } from "@material-ui/core";
import { Brightness1 } from "@material-ui/icons";
import React from "react";
import "./Story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0), rgba(65, 131, 215, 0.7)), url(${image})`,
      }}
      className="story"
    >
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
