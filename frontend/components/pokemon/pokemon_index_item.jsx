import React from "react";
import pokemon_index_container from "./pokemon_index_container";
import { Link } from "react-router-dom";

export const PokemonIndexItem = (props) => (
  <li className="pokemon-index-item">
    <Link to={`/pokemon/${props.pokemon.id}`}>
    <span>{props.pokemon.id}</span>
    <img src={props.pokemon.imageUrl}/>
    <span>{props.pokemon.name}</span>
    </Link>
  </li>
)