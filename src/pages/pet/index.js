import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AnimalsActions from '../../actions/animals'

const PostDetails = ({ animal, getAnimalDetails, match }) => {
  useEffect(() => {
    getAnimalDetails(match.params.id)
  }, [getAnimalDetails, match.params.id])

  return (
    <Fragment>
      <section className="section portfolio-single">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={animal.image} className="img-fluid" alt="Pet" />
            </div>

            <div className="col-12 col-md-6">
              <div>
                <h3>Localização</h3>
                <p>{animal.city} - {animal.state}</p>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong>Idade</strong>
                  <p>{animal.age}</p>
                </div>

                <div className="col-4">
                  <strong>Cor</strong>
                  <p>{animal.color}</p>
                </div>

                <div className="col-4">
                  <strong>Genero</strong>
                  <p>{animal.gender}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong>Tamanho</strong>
                  <p>{animal.size}</p>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-12">
                  <h4 className="h3">Contatos</h4>
                </div>

                <div className="col-4">
                  <strong>Celular</strong>
                  <p>(11) 99688-3262</p>
                </div>

                <div className="col-4">
                  <strong>Telefone</strong>
                  <p>(11) 2516-2653</p>
                </div>
              </div>

              <h4>Sobre o pet</h4>
              <p>
                {animal.description}
              </p>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

const mapStateToProps = state => ({
  animal: state.animal.animal
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(AnimalsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
