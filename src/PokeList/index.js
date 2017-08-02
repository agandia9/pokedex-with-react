import React, {Component} from 'react'
import PokeCard from '../PokeCard'

class PokeList extends Component {

    state = {
        pokemons: [],
        loading: true
    }

    componentWillMount() {
        fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
		.then(res => res.json())
		.then(res => {
            console.log(res)
            return res
        })
		.then(res => {
            this.setState({
				pokemons: res.results,
				loading: false
			})
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
						name={`${pokemons[num]['name'][0].toUpperCase()}${pokemons[num]['name'].substr(1)}`}
					/>
				)
            })
        }
		</div>
	)
    }
}

export default PokeList
