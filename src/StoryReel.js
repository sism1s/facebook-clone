import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i1.wp.com/learnerscoupons.com/wp-content/uploads/2017/09/625204_436a_2.jpg?fit=480%2C270&ssl=1"
        profileSrc="https://s3.amazonaws.com/codenewbie-assets/original/colt-steele.png?1570566555"
        title="Colt Steele"
      />
      <Story
        image="https://i.pinimg.com/originals/83/7b/d2/837bd293a2c08e6bf0a9fe2ac63b55b6.png"
        profileSrc="https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0.jpg"
        title="Jonas Schmedtmann"
      />
      <Story
        image="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s900-c-k-c0x00ffffff-no-rj"
        profileSrc="https://www.hazimzakariya.com/images/IG_Sonny.jpeg"
        title="Sonny Sangha"
      />
      <Story
        image="https://eamarce.files.wordpress.com/2015/05/javascript-understanding-the-weird-parts.png?w=788"
        profileSrc="https://pbs.twimg.com/profile_images/1330200661439488001/T6AtORxC.jpg"
        title="Tony Alicea"
      />
      <Story
        image="https://img.youtube.com/vi/mNJ06S60B9k/0.jpg"
        profileSrc="https://static.wikia.nocookie.net/youtube/images/1/1f/Dev_Ed.jpeg/revision/latest?cb=20191223141915"
        title="Dev Ed"
      />
    </div>
  );
}

export default StoryReel;
