import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId){
      this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }
  }

  render () {
    return (
      <div>
        <img src={this.props.pokemon.imageUrl} alt="" />
        {this.props.pokemon.name}
        {this.props.pokemon.defense}
      </div>
    )
  }
}

export default PokemonDetail