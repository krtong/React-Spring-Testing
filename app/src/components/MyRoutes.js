import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Mynav from "./Nav/MyNav"

const MyRoutes = () => {
    return (
        <div>   
    <Router>
        <Mynav></Mynav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
     </Router>
        </div>
    )
}

export default MyRoutes
