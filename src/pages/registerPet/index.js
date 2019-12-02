import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AnimalsActions from '../../actions/animals'

class RegisterPet extends Component {
  state = {
    contact: 1,
    name: '',
    description: '',
    image: null,
    age: '',
    color: '',
    gender: '',
    specie: '',
    size: '',
    category: '',
    location: '',
    city: '',
    state: ''
  }

  createPet = async (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.addAnimal(this.state)
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: event.target.files[0]
      })
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="w0199">Cadastrar pet</h1>
          </div>

          <form onSubmit={this.createPet} className="col-12">
            <div className="form-row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="category">Categoria*</label>
                  <select className="form-control" id="category" value={this.state.category} onChange={e => this.setState({ category: e.target.value })} required>
                    <option value="">Selecione uma opção</option>
                    <option value="achado">Achado</option>
                    <option value="perdido">Perdido</option>
                    <option value="adoção">Adoção</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="name">Nome do pet</label>
                  <input type="text" className="form-control" id="name" placeholder="Marley" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label htmlFor="age">Idade do pet</label>
                  <input type="text" className="form-control" id="age" placeholder="20" value={this.state.age} onChange={e => this.setState({ age: e.target.value })} />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Genero*</label>
                  <select className="form-control" id="gender" value={this.state.gender} onChange={e => this.setState({ gender: e.target.value })} required>
                    <option value="">Selecione uma opção</option>
                    <option value="M">Macho</option>
                    <option value="F">Fêmea</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="color">Cor do pet*</label>
                  <input type="text" className="form-control" id="color" placeholder="Marrom" value={this.state.color} onChange={e => this.setState({ color: e.target.value })} required />
                </div>

                <div className="form-group">
                  <label htmlFor="specie">Espécie*</label>
                  <select className="form-control" id="specie" value={this.state.specie} onChange={e => this.setState({ specie: e.target.value })} required>
                    <option value="">Selecione uma opção</option>
                    <option value="cachorro">Cachorro</option>
                    <option value="gato">Gato</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="size">Tamanho*</label>
                  <select className="form-control" id="size" value={this.state.size} onChange={e => this.setState({ size: e.target.value })} required>
                    <option value="">Selecione uma opção</option>
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                    <option value="extra grande">Extra grande</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="location">Endereço</label>
                  <input type="text" className="form-control" id="location" placeholder="Av. Paulista, 123" value={this.state.location} onChange={e => this.setState({ location: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label htmlFor="city">Cidade*</label>
                  <input type="text" className="form-control" id="city" placeholder="São Paulo" value={this.state.city} onChange={e => this.setState({ city: e.target.value })} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="state">Estado*</label>
                  <input type="text" className="form-control" id="state" placeholder="SP" value={this.state.state} onChange={e => this.setState({ state: e.target.value })} required />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Descrição*</label>
                  <textarea className="form-control" id="description" rows="5" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} required></textarea>
                </div>

                <div className="w-100">
                  {this.state.image && <img id="target" className="img-fluid" src={URL.createObjectURL(this.state.image)} alt="Animal"/>}
                </div>

                <div className="custom-file mb-3">
                  <input type="file" onChange={this.onImageChange} className="custom-file-input" id="image" required />
                  <label className="custom-file-label" htmlFor="image">Escolher foto do pet.</label>
                  <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={this.props.loading}>
                  {this.props.loading ? 'Criando...' : 'Cadastrar pet'}
                </button>
              </div>
            </div>
            <small>* - Campos obrigatórios</small>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.animal.loading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(AnimalsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPet)
