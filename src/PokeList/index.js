import React, {Component} from 'react'
import PokeCard from '../PokeCard'
import './PokeList.css'

class PokeList extends Component {

	state = {
		pokemons: [],
		filteredName: '',
		loading: true,
		selectedPokemon: ''
	}

	componentWillMount() {
		fetch('https://pokeapi.co/api/v2/pokemon/	',
			)
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
	filteredPokemon = (e)=>{ 
		this.setState({ filteredName: e.target.value})
	}
	filterNames = (pokemonId) => {
		const { pokemons, filteredName } = this.state
		if (filteredName === '') {
			return true
		} else if (pokemons[pokemonId].name.includes(filteredName)) {
			return true
		} else {
			return false
		}
	}

	getInfo = (e) => {
		const url = e.target.getAttribute('data')
		console.log(url)
		
		fetch(url)
			.then(res=>res.json())
			.then(res=>{
				console.log(res)
				this.setState({
					selectedPokemon: {
						name: res.name,
						id: res.id,
						type: res.types.map((n)=>{
							return n.type.name
						})
					}
				})
				console.log(this.state.selectedPokemon)
		})
		// fetch(url).then((res)=>console.log(res))
	}

	render() {
		const { pokemons, filteredPokemon } = this.state
		return (
			<div>
			<input type="text" onChange={this.filteredPokemon} />
				<div>
				{
					this.state.loading && <p>Loading</p>
				}
				{
					!this.state.loading && Object.keys(pokemons).filter(this.filterNames).map(num => {
						return (
							<PokeCard
								key = {num}
								pokemonId={pokemons['name']}
								getInfo = {this.getInfo}
								moreInfo={pokemons[num]['url']}
								name={`${pokemons[num]['name'].toLowerCase()}`}
							/>
						)
					})
				}
				<button>More Pokemons</button>
				</div>
			</div>
			)
			}
}

export default PokeList
