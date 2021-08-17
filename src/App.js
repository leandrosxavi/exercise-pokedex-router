import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';


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
          <Link to="/">Pokedex</Link>
          
          <Switch>
            
            <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
            <Route 
                path="/pokemon/:id"
                render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;