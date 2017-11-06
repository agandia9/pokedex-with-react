import React from 'react'
import { render } from 'react-dom'
import PokeList from './PokeList'

const App = () => (
	<div className="container">
		<div className="jumbotron container">
			<span><h1 className="inline"> Pokedex! </h1> <img className="inline" src="https://img00.deviantart.net/efcb/i/2014/151/d/e/8_bit_pokeball_by_gabixlol-d7kg1ab.png" alt="" height="50px" width="50px"/></span>
		</div>
		<PokeList className="row"/>
	</div>
)

render(<App />, document.getElementById('root'))
