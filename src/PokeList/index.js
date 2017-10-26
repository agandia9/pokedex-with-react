import React, {Component} from 'react'
import PokeCard from '../PokeCard'

class PokeList extends Component {

    state = {
        pokemons: [],
        loading: true,
        selectedPokemon: ''
    }

    componentWillMount() {
        fetch('http://pokeapi.salestock.net/api/v2/pokedex/6',
            )
		.then(res => res.json())
		.then(res => {
            console.log(res)
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
    
    getInfo = (e) => {
        const url = e.target.getAttribute('data')
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    selectedPokemon: {
                        name: res.name,
                        id: res.id,
                        evo: res.evolution_chain
                    }
                })
                console.log(this.state.selectedPokemon)
        })
        // fetch(url).then((res)=>console.log(res))
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
                // console.log(num, pokemons[num]['name'])
                return (
					<PokeCard
						key = {num}
						pokemonId={pokemons[num]['pokemon_species']['name']}
                        getInfo = {this.getInfo}
                        moreInfo={pokemons[num]['pokemon_species']['url']}
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
