import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ROUTES from './Router.data.js'

// ================================= //
//
//  Router Class
//
// ================================= //
class Router {

  defaultTitle = 'Tract • Interview Assignment'

  // ------------------------------ //
  //  Set page Title in browser
  // ------------------------------ //
  static setTitle = (props) => {
    const path = (props && props.location && props.location.pathname) ||
                 (props && props.match && props.match.path) || '/'
    const route = ROUTES.find(r => r.path === path)
    document.title = (route && route.title) || this.defaultTitle
  }

  // ------------------------------ //
  //  For testing purposes - draw all route <Links> in DOM
  // ------------------------------ //
  static renderLinks = () => ROUTES.map(
    route => <Link to={route.path} key={route.id}>{route.title} |</Link>
  )

  // ------------------------------ //
  //  Get Route URL Path
  // ------------------------------ //
  static getPath = (routeId, params) => {
    const route = ROUTES.find(r => r.id === routeId)
    let path = route.path

    // Replace /:params in url string with actual values
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        path = path.replace(`:${key}`, value)
      }
    }

    return path
  }

  // --------------------------------------- //
  //
  //  Convert 'Router.data.js' array into 'react-router-dom' components.
  //
  // --------------------------------------- //
  static init = () => (
    <Switch>
      {ROUTES.map(route => {
        return (
          <Route
            path={route.path}
            exact={route.exact ? true : false}
            key={route.id}
          >
            {/* ----- Nav ----- */}
            {route.nav ? React.createElement(route.nav) : null}

            {/* ----- Route Component ----- */}
            {React.createElement(route.component)}
          </Route>
        )
      })}
    </Switch>
  )
}

export default Router
