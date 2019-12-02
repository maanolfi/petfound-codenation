import * as types from '../types/animals'

export function getAllAnimals() {
  return {
    type: types.GET_ALL_ANIMALS
  }
}

export function successGetAnimals(animals) {
  return {
    type: types.SUCCESS_GET_ALL_ANIMALS,
    payload: animals
  }
}

export function failedGetAnimals() {
  return {
    type: types.FAILED_GET_ALL_ANIMALS
  }
}

export function getAnimalDetails(animalId) {
  return {
    type: types.GET_ANIMAL_DETAILS,
    payload: animalId
  }
}

export function successGetAnimalDetails(animalDetails) {
  return {
    type: types.SUCCESS_GET_ANIMAL_DETAILS,
    payload: animalDetails
  }
}

export function failedGetAnimalDetails() {
  return {
    type: types.FAILED_GET_ALL_ANIMALS
  }
}

export function addAnimal(animal) {
  return {
    type: types.ADD_ANIMAL,
    payload: animal
  }
}

export function succcessAddAnimal() {
  return {
    type: types.SUCCESS_ADD_ANIMAL
  }
}

export function failedAddAnimal() {
  return {
    type: types.FAILED_ADD_ANIMAL
  }
}


export function login(values) {
  console.log(values)
}