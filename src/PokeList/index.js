import React, { Component } from 'react'
import PokeCard from '../PokeCard'

class PokeList extends Component{

	state = {
		pokemons: []
	}

	handleClick = () => {
		fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
		.then(res => res.json())
		.then(res => {
			this.setState({pokemons: res.results})
		})
	}

	render(){
		const { pokemons } = this.state
		return(
			<div>
				<button className='btn btn-danger' onClick={this.handleClick}>
					Catch me bitch!
				</button>
				<div>
					{
						pokemons.map((pokemon, index) => (
						<PokeCard
							name={pokemon['name']}
							pokemonId={index+1}
							/>
						))
					}
				</div>
			</div>
		)
	}
}

export default PokeList
