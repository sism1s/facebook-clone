import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
import { useStateValue } from "./StateProvier";

function Message({ username, text }) {
  const [{ user }, dispatch] = useStateValue();
  const isUser = user.displayName === username;
  console.log(username);
  console.log(isUser);

  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {username}: {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
