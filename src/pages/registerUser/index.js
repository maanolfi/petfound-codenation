import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as UsersActions from '../../actions/users'

const RegisterUser = ({ loading, error, createUser }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSubmit = async event => {
    event.preventDefault()

    const user = {
      username,
      email,
      password1: password,
      password2: confirmPassword
    }

    createUser(user)
  }

  return (
    <div className="h-100 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <img src={'images/auth/login.svg'} alt="Register user" className="img-fluid" />
          </div>

          <form onSubmit={onSubmit} className="col-6">
            <h1 className="h2">Criar usuario</h1>
            {error && <div className="text-danger">Ocorreu um erro ao se registrar</div>}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" onChange={e => setUsername(e.target.value)} value={username} className="form-control" name="username" id="username" placeholder="Maria123" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Seu email</label>
              <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" name="email" id="email" placeholder="maria@gmail.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" name="password" id="password" placeholder="123456" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmação de senha</label>
              <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} className="form-control" name="confirmPassword" id="confirmPassword" placeholder="123456" required />
            </div>

            <div className="form-group">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-block btn-main">
                {loading ? 'Cadastrando...' : 'Criar usuario'}
              </button>

              <Link to="/login" className="btn btn-block btn-main">
                Já tenho cadastro
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.users.loading,
  error: state.users.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)
