import api from './api'

export const register = async user => {
  const { data } = await api.post('rest-auth/registration/', user)
  return data.token
}

export const login = async credentials => {
  const { data } = await api.post('rest-auth/login/', credentials)

  return data.key
}

export const logout = () => {
  return api.post('rest-auth/logout/')
}
