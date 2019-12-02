import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Home from '../pages/home'
import PetDetail from '../pages/pet'
import Login from '../pages/login'
import RegisterUser from '../pages/registerUser'
import RegisterPet from '../pages/registerPet'

const PrivateRoute = ({ component: Component, userKey, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userKey ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
)

const MyRouter = ({ userKey }) => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/posts/:id' exact component={PetDetail} />
        <Route path='/registeruser' component={RegisterUser} />
        <PrivateRoute userKey={userKey} path='/registerpet' component={RegisterPet} />
      </Switch>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  userKey: state.users.key
})

export default withRouter(connect(mapStateToProps)(MyRouter))
