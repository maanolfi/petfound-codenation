import { getAllAnimals, successGetAnimals } from './animals'

test('Action: TYPE GET ALL ANIMALS', () => {
  const all = getAllAnimals()
  expect(all).toEqual({
    type: 'GET_ALL_ANIMALS'
  })
})

test('Action: TYPE SUCCESS GET ALL ANIMALS', () => {
  const all = successGetAnimals()
  expect(all).toEqual({
    type: 'SUCCESS_GET_ALL_ANIMALS'

  })
})
