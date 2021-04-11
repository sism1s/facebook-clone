import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://scontent.fgba1-1.fna.fbcdn.net/v/t1.6435-9/142675490_10221219403607914_5256002304997073390_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AKCIdcwsPA4AX8Zo6YH&_nc_ht=scontent.fgba1-1.fna&oh=246705662615d5943d6374da6a3c5af0&oe=60956685"
        message="Hellou, test test. Facebook wou"
        timestamp="This is a timestamp"
        username="Marko"
        image="https://miro.medium.com/max/11520/0*Jy3heMl_yP_fQwMO"
      />

      <Post
        profilePic="https://scontent.fgba1-1.fna.fbcdn.net/v/t1.6435-9/142675490_10221219403607914_5256002304997073390_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AKCIdcwsPA4AX8Zo6YH&_nc_ht=scontent.fgba1-1.fna&oh=246705662615d5943d6374da6a3c5af0&oe=60956685"
        message="Hellou, test2 test2. Facebook wou"
        timestamp="This is a timestamp"
        username="Marko"
      />
    </div>
  );
}

export default Feed;
