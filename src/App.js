import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvier";
import Widgets from "./Widgets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./Messenger";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {!user ? (
              <Login />
            ) : (
              <>
                <Header />

                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </>
            )}
          </Route>
          <Route exact path="/messenger">
            <Messenger />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
