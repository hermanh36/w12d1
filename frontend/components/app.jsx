import React from "react";
import { Route } from "react-router-dom";
import PokemonIndexContainer from "./pokemon/pokemon_index_container"

export const App = () => {
  return (
    <Route path="/" component={PokemonIndexContainer} />
  )
}