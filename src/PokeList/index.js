import React, {Component} from 'react'
import PokeCard from '../PokeCard'

class PokeList extends Component {

    state = {
        pokemons: [],
        loading: true
    }

    componentWillMount() {
        fetch('http://pokeapi.salestock.net/api/v2/pokedex/national',
            )
		.then(res => res.json())
		.then(res => {
            console.log(res.pokemon_entries)
            return res.pokemon_entries
        })
		.then(res => {
            this.setState({
				pokemons: res,
				loading: false
			})
            console.log(this.state)
        })
    }

    render() {
        const {pokemons} = this.state
        return (
			<div>
        {
            this.state.loading && <p>Loading</p>
        }
        {
            !this.state.loading && Object.keys(pokemons).map(num => {
                console.log(num, pokemons[num]['name'])
                return (
					<PokeCard
						key={num}
						pokemonId={num * 1 + 1}
						name={`${pokemons[num]['pokemon_species']['name'].toUpperCase()}`}
					/>
				)
            })
        }
		</div>
	)
    }
}

export default PokeList
