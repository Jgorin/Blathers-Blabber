import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"

import AnimalIndex from "./AnimalIndex"

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimalIndex}/>
      </Switch>
    </BrowserRouter>
  )
}
export default Router
