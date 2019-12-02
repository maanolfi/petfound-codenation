import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AnimalsActions from '../../actions/animals'

import Banner from '../../components/Banner'
import Animals from '../../components/Animals'

const Home = ({ animals, getAllAnimals }) => {
  useEffect(() => {
    getAllAnimals()
  }, [getAllAnimals])

  return (
    <Fragment>
      <Banner/>
      <Animals animals={animals} />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  animals: state.animals.animals
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(AnimalsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
