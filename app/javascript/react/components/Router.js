import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"

import AnimalIndex from "./AnimalIndex"
import AnimalShow from "./AnimalShow"

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimalIndex}/>
        <Route exact path="/animals" component={AnimalIndex}/>
        <Route exact path="/animals/:id" component={AnimalShow}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Router
