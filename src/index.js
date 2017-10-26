import React from 'react'
import { render } from 'react-dom'
import PokeList from './PokeList'

const App = () => (
	<div className="container">
		<h1> Pokedex! </h1>
		<PokeList className="row"/>
	</div>
)

render(<App />, document.getElementById('root'))
