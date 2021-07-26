
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/NewsContent/NewsContent";
import NewsDetails from "./components/NewsContent/NewsDetails";
import NavInshort from "./components/NavInshort";
import newsStore from "./newsStore";

export default function App() {

const [category, setCategory] = useState("general");
const store = new newsStore();

  return (
    <Router>
      <div>
      <NavInshort setCategory={setCategory} />
        <Switch>
          <Route path="/news/:newsId">
            <NewsDetails store={store} />
          </Route>
          <Route path="/">
            <Home store={store} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

