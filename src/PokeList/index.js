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
		fetch('https://pokeapi.co/api/v2/pokemon/',
			)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			return res
		})
		.then(res => {
			this.setState({
				pokemons: res.results,
				next: res.next,
				loading: false
			})
		})
	}

	filteredPokemon = (e)=>{ 
		this.setState({ filteredName: e.target.value.toLowerCase()})
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

	getMorePokemons = () => {
		fetch(this.state.next).then(res => res.json())
		.then(res => {
			console.log(res)
			return res
		}).then(res => {
			this.setState((prevState)=>{
				console.log(prevState)
				return { pokemons: prevState.pokemons.concat(res.results),next:res.next }
			})
		})
	}

	render() {
		const { pokemons, filteredPokemon } = this.state
		return (
			<div>
			<h2>Displaying {this.state.pokemons.length} Pokemons</h2>
			<input className="form-control" type="text" onChange={this.filteredPokemon} />
				<div>
				{
					this.state.loading && <p>Loading</p>
				}
				{
					!this.state.loading && Object.keys(pokemons).filter(this.filterNames).map(num => {
						return (
							<PokeCard
								key = {num}
								num = {parseInt(num)}
								pokemonId={pokemons[num]['name']}
								getInfo = {this.getInfo}
								moreInfo={pokemons[num]['url']}
								name={`${pokemons[num]['name'].substr(0,1).toUpperCase()}${pokemons[num]['name'].substr(1).toLowerCase()}`}
							/>
						)
					})
				}
				<button className="btn btn-block btn-success"onClick={this.getMorePokemons} data-url={this.state.next}>More Pokemons</button>
				</div>
			</div>
			)
			}
}

export default PokeList
