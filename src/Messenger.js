import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import Message from "./Message";
import "./Messenger.css";
import { useStateValue } from "./StateProvier";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Messenger() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      profilePic: user.photoURL,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  console.log(messages);

  return (
    <div className="messenger">
      <div className="messenger__header">
        <Link to="/" className="messenger__headerLink">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
            alt=""
          />
        </Link>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png"
            alt=""
          />
          <h2>Welcome {user.displayName}</h2>
        </div>
      </div>

      <form className="messenger__form">
        <FormControl className="messenger__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input
            className="message__input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="message__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message
            key={id}
            text={message.message}
            username={message.username}
            timestamp={message.timestamp}
            profilePic={message.profilePic}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Messenger;
