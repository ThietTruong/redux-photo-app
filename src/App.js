import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
const Photo = React.lazy(() => import("./features/Photo/Photo"));
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          <Header />
          <ul>
            <li>
              <Link to="/photos">Overview</Link>
            </li>
            <li>
              <Link to="/photos/add">Add new photo</Link>
            </li>
          </ul>
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
