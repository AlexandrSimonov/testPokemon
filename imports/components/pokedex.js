import React from "react";
import PokemonApi from "../api/pokemonapi";

export default class Pokedex extends React.Component{
  constructor(props) {
    super(props);
    this.state = { pokemons: null, limit: 20, page: 1, error: null }
  }

  getPokemons() {
    PokemonApi.getPokemons(this.state.limit, this.state.limit * (this.state.page - 1)).then(res => {
      this.setState({ pokemons: res.results })
    }).catch(err => {
      console.log(err);
      this.setState({error: err})
    })
  }

  componentDidMount() {
    this.getPokemons();
  }

  changePage(num) {
    if(this.state.page + num >= 1){
      this.setState({ page: this.state.page + num }, () => {
        this.getPokemons();
      }); 
    }
  }

  render() {
    if(this.state.error !== null){
      return (
        <div>
          Возникла ошибка, обновите страницу для устранения
        </div>
      );
    } else {
      if (this.state.pokemons !== null) {
        return (
          <div>
            {this.state.pokemons.map(pokemon => {
              return (
                <div>
                  <p>{pokemon.name}</p>
                </div>
              );
            })}

            <button onClick={() => this.changePage(-1)}>prev</button>
            <button onClick={() => this.changePage(1)}>next</button>
          </div>
        );
      }
      else {
        return <div>...load</div>
      }
    }
  }
}