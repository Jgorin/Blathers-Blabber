import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"

import AnimalIndex from "./AnimalIndex"
import AnimalShow from "./AnimalShow"

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/animals/:id" component={AnimalShow}/>
        <Route path="/" component={AnimalIndex}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Router
