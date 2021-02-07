import { Nav } from '../layout'
import {
  Home,
  Livestream,
  NotFound404,
  PageOne,
  PageTwo,
} from '../pages'

// --------------------------- //
//
//  Routes
//
// --------------------------- //
const ROUTES = [
  {
    id: 'home',
    title: 'Tract • Interview Assignment',
    exact: true,
    path: '/',
    component: Home,
    nav: Nav
  },

  {
    id: 'livestream',
    title: 'Livestream',
    exact: true,
    path: '/livestream/:videoId',
    component: Livestream,
    nav: Nav
  },

  {
    id: 'pageOne',
    title: 'Page One',
    exact: true,
    path: '/page-one',
    component: PageOne,
    nav: Nav
  },

  {
    id: 'pageTwo',
    title: 'Page Two',
    exact: true,
    path: '/page-two',
    component: PageTwo,
    nav: Nav
  },
]

// --------------------------------------- //
//  404 Not Found *Catchall* MUST BE LAST
// --------------------------------------- //
ROUTES.push({
  id: '404',
  title: '404 Not Found',
  exact: true,
  path: '*',
  component: NotFound404,
})

export default ROUTES
