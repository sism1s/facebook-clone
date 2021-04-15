import React, { forwardRef } from "react";
import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
import { useStateValue } from "./StateProvier";

const Message = forwardRef(({ username, text, timestamp, profilePic }, ref) => {
  const [{ user }, dispatch] = useStateValue();
  const isUser = user.displayName === username;
  console.log(username);
  console.log(text);
  console.log(isUser);
  console.log(user);

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Avatar src={profilePic} className="message__avatar" />
      <div>
        <Card className={isUser ? "message__userCard" : "message__guestCard"}>
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {!isUser && `${username}:`} {text}
            </Typography>
          </CardContent>
        </Card>
        <p style={{ color: "black" }}>
          {new Date(timestamp?.toDate()).toUTCString()}
        </p>
      </div>
    </div>
  );
});

export default Message;
