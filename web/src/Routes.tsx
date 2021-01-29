import React from 'react'
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  RouteProps,
  Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'
import DefaultLayout from './containers/Default'

interface LayoutRouteProps extends RouteProps {
  component: React.FC<RouteComponentProps>
}

const LayoutRoute: React.FC<LayoutRouteProps> = ({
  component: Component,
  ...props
}) => (
  <Route
    {...props}
    component={(routeProps: any) => (
      <DefaultLayout>
        <Component {...routeProps} />
      </DefaultLayout>
    )}
  />
)

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute exact path="/" component={Home} />
        <LayoutRoute path="/:id" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
