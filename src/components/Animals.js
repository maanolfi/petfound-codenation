import React, { useState, useEffect } from 'react'

import Animal from './Animal'

const Animals = ({ animals }) => {

  const [specie, setSpecie] = useState(animals)
  const [searchString, setsearchString] = useState('')

  const dogs = animals.filter(animal => animal.specie === 'cachorro')
  const cats = animals.filter(animal => animal.specie === 'gato')
  const found = animals.filter(animal => animal.category === 'achado')
  const lost = animals.filter(animal => animal.category === 'perdido')
  const adoption = animals.filter(animal => animal.category === 'adoção')

  const filteredRecipes = animals.filter(animal => {
    return (
      animal.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
      animal.description.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    )
  })


  useEffect(() => {
    setSpecie(filteredRecipes)
  }, [animals, searchString])

  const handleChange = event => {
    setsearchString(event.target.value)

  }

  return (
    <main className="portfolio">
      <div className="container">
        <div className="row mb-5">

          <div className="col-10">
            <div className="btn-group btn-group-toggle ">
              <label className="btn" onClick={() => setSpecie(animals)}>
                Todos os Pets
              </label>
              <label className="btn" onClick={() => setSpecie(dogs)}>
                Cães
              </label>
              <label className="btn" onClick={() => setSpecie(cats)}>
                Gatos
              </label>
              <label className="btn" onClick={() => setSpecie(found)}>
                Encontrado
              </label>
              <label className="btn" onClick={() => setSpecie(lost)}>
                Perdido
              </label>
              <label className="btn" onClick={() => setSpecie(adoption)}>
                Adoção
              </label>

            </div>
          </div>

          <input
            value={searchString}
            onChange={handleChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search" />

        </div>

        <div className="row shuffle-wrapper portfolio-gallery">
          {console.log(filteredRecipes)}
          {
            specie.map((elem, index) => {
              return <Animal key={index} animal={elem} />
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Animals
