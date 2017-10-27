import React, {Component} from 'react'
import PokeCard from '../PokeCard'
import './PokeList.css'

class PokeList extends Component {

    state = {
        pokemons: [],
        filteredPokemon:'',
        pokemonsFiltered: [],
        loading: true,
        selectedPokemon: ''
    }

    componentWillMount() {
        fetch('http://pokeapi.salestock.net/api/v2/pokedex/2',
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
     filteredPokemon = (e)=>{
            let filteredPokemon = e.target.value
            this.setState({
                filteredPokemon:filteredPokemon
            })
            this.setState({
                pokemonsFiltered:this.state.pokemons.filter(e => e['pokemon_species']['name'].includes(filteredPokemon))
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
        const { pokemons } = this.state
        const {pokemonsFiltered } = this.state;


        return (
            <div>
            <input type="text" onChange={this.filteredPokemon}/>
    			<div>
                {
                    this.state.loading && <p>Loading</p>
                }
                {
                    !this.state.loading && Object.keys(pokemonsFiltered).map(num => {
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
            </div>
        	)
            }
}

export default PokeList
