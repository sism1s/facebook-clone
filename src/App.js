import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvier";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./Messenger";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import Home from "./Home";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
        setLoading(false);
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
        setLoading(true);
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {loading && <Login />}
        {user && (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/messenger">
              <Messenger />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
