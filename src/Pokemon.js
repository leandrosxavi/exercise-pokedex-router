import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFavourite: false,
      favPokes: [],
    }

    this.favouritePokemon = this.favouritePokemon.bind(this);
  }
  
  favouritePokemon({ target }) {
    const { name } = target;
    const value = target.checked ? true : false;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;

    return (

      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemon/${id}`}> More Info </Link>
        </div>
        {/* <img src="http://simpleicon.com/wp-content/uploads/star.svg" alt="" height="20" /> */}

        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;