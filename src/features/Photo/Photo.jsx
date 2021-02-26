import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AddEdit from "./pages/AddEdit/AddEdit";
import NotFound from "../../components/NotFound/NotFound";
function Photo() {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={MainPage} />
        <Route exact path={`${match.url}/add`} component={AddEdit} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Photo;
