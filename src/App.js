import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import PokemonDetails from './PokemonDetails';
import NotFound from './NotFound';
import FavouritesPokemons from './FavouritesPokemons';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <Link to="/"> Pokedex </Link>
          <Link to="/about"> About </Link>
          <Link to="/favourites"> Favourites Pokemons </Link>
          
          <Switch>
            
            <Route
                path="/pokemon/:id"
                render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}
            />
            <Route
              path="/favourites"
              render={(props) => <FavouritesPokemons {...props} pokemons={pokemons} />}
            />
            <Route
              path="/about"
              component={ About }
            />
            <Route
              exact path="/"
              render={(props) => <Pokedex {...props} pokemons={pokemons} />}
            />
            <Route component={ NotFound } />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;