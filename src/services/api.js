import axios from 'axios'
import { store } from '../store'

const api = axios.create({ baseURL: 'http://nineth2019.pythonanywhere.com/' })

api.interceptors.request.use(async config => {
  const token = await getToken()

  if (token) {
    config.headers = { Authorization: 'Token ' + token }
  }
  return config
})

const getToken = async () => {
  const state = await store.getState()
  if (state && state.users) {
    return state.users.key
  }

  return null
}

export const getAllAnimals = async () => {
  try {
    const response = await api.get('api/animals/')
    return response.data
  } catch (err) {
    return []
  }
}

export const getAnimalDetails = async (animalId) => {
  try {
    const response = await api.get(`api/animals/${animalId}`)
    return response.data
  } catch (err) {
    return []
  }
}

export const createAnimal = async (animal) => {
  try {
    const formData = new FormData()
    for (const key in animal) {
      if (key === 'image') {
        formData.append(key, animal[key])
      } else {
        formData.set(key, animal[key])
      }
    }

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    const response = await api.post(`api/animals/create`, formData, config)
    return response.data
  } catch (err) {
    return err
  }
}

export default api
