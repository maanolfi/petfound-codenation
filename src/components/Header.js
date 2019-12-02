import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import * as UserActions from '../actions/users'

const Header = ({ userKey, logout, history }) => {
  const handleLogout = () => {
    logout()
    history.push('/login')
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg  main-nav " id="navbar">
        <div className="container">

          <img src="images/logo.png" alt="Pets Found" width='120px' height='120px' />

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-align-justify"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav ml-auto">


              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              {userKey && <li className="nav-item dropdown active">
                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Cadastrar
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/registerpet" className="dropdown-item">Pet Perdido ou adoção</Link>
                  </li>
                </ul>
              </li>}

              {!userKey && <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>}

              {!userKey && <li className="nav-item">
                <Link to="/registeruser" className="nav-link">Registre se</Link>
              </li>}

              {userKey && <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-link nav-link">Sair</button>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = state => ({
  userKey: state.users.key
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
