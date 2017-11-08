import React from 'react'
import { render } from 'react-dom'
import PokeList from './PokeList'

const App = () => (
	<div className="container">
		<div className="jumbotron">
			<span><h1 className="inline"> National Pokedex </h1> <img className="inline" src="https://img00.deviantart.net/efcb/i/2014/151/d/e/8_bit_pokeball_by_gabixlol-d7kg1ab.png" alt="" height="50px" width="50px"/></span>
			<p>Search your favorite Pokemon and search information!</p>
		</div>
		<PokeList className="row"/>
	</div>
)

render(<App />, document.getElementById('root'))
