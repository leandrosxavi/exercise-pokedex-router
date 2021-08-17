import React from 'react';
import pokemons from './data';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
    }

    this.renderInfoById = this.renderInfoById.bind(this);
  }


  renderInfoById(givenId) {
    const pokeInfo = pokemons.find((poke) => poke.id === givenId);
    const { name, type, averageWeight, summary, foundAt } = pokeInfo;
    
    return (
      
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value}kg`}</p>
        <p>{summary}</p>
        { foundAt.map((location, i) => {
          return (
            <div key={i}>
              <span>{location.location}</span>
              <img src={location.map} alt={location.location} />
            </div>
          );
        })}
      </div>
    )
  }
  
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <p>{ id }</p>
        { this.renderInfoById(parseInt(id)) }
      </div>
    );
  }
}

export default PokemonDetails;