import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import { Route } from "react-router-dom"
import PokemonDetail from './pokemon_detail';
import PokemonDetailContainer from './pokemon_detail_container';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }

  // componentDidUpdate() {
  //   if 
  // this.props.requestAllPokemon()
  // }

  
  render(){

    return (
    <section className="pokedex">
      <div className="pokemon-detail">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
      </div>
      <ul>
      {this.props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} pokemon={poke}/>
        ))}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;