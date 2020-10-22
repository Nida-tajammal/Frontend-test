import React from "react"
import {Route,Switch} from "react-router-dom"
import Users from "./users";
import UserTablee from "./userslist";
 

const App = () => {

  return (
    <Switch>
        <Route exact path="/" component = {UserTablee} />
        <Route path="/users/:id" component={Users} />
    </Switch>
  )


}

export default App;