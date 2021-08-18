import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>
        A <strong>Pokédex</strong>, também conhecida como <strong>Poké-Agenda</strong> no Brasil (e ainda como Dexter ou Dextette, dependendo da voz masculina ou feminina do aparelho) é uma enciclopédia virtual portátil de alta tecnologia que os treinadores Pokémon transportam para registra todas as espécies diferentes de Pokémon que são encontradas durante a sua viagem como treinadores. Em geral, quando são cumpridos determinados requisitos, a capacidade pode ser aumentada permitindo que a Pokédex possa armazenar dados de outros Pokémon, que não são comuns, assim como os Pokémon de outras regiões.
        </p>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflxld_2UihVTaPYWwVKIBDGxmulgvaJZ-bA&usqp=CAU"
          alt="Pokedex da região de Kanto"
        />
      </div>
    );
  }
}

export default About;

