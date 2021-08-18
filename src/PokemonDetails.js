import React from 'react';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.renderInfoById = this.renderInfoById.bind(this);
  }


  renderInfoById(givenId) {
    const pokeInfo = this.props.pokemons.find((poke) => poke.id === givenId);
    const { name, type, averageWeight, summary, foundAt } = pokeInfo;

    return (
      
      <div>
        <h1>{`${name}'s details: `}</h1>
        <p>{type}</p>
        <p>{`${averageWeight.value}kg`}</p>
        <p>{summary}</p>
        { foundAt.map((location, i) => {
          return (
            <div key={i}>
              <span> {location.location} </span>
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

        { this.renderInfoById(parseInt(id)) }
        

      </div>
    );
  }
}

export default PokemonDetails;