import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as UsersActions from '../../actions/users'

const Login = ({ userKey, loading, error, login, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (userKey) {
      history.push('/')
    }
  }, [userKey, history])

  const onSubmit = e => {
    e.preventDefault()

    login({ email, password })
  }

  return (
    <section className="section-mg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img src={'images/auth/login.svg'} alt="Register user" className="img-fluid" />
          </div>

          <div className="col-12 col-md-6">
            <div className="">
              <h1 className="h2">Login</h1>
              {error && <div className="text-danger">Email e/ou senha inválido</div>}
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Seu email</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    placeholder="email"
                    required />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Sua senha</label>
                  <input
                    name="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required />
                </div>

                <div className="mt-5">
                  <button
                    disabled={loading}
                    className="login btn btn-lg btn-main btn-block"
                    type="submit">
                    {loading ? 'Carregando...' : 'Fazer Login'}
                  </button>
                  <Link to="/registeruser" className="btn btn-lg btn-outline-secondary btn-block">Não tenho cadastro</Link>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.users.loading,
  error: state.users.error,
  userKey: state.users.key
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
