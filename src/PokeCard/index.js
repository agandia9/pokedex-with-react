import React from 'react'
import './PokeCard.css'

const PokeCard = (props) => (
	  <div className="col-sm-4 col-md-3 img-responsive">
	    <div className="thumbnail">
	      <img src={ `http://www.pokestadium.com/sprites/xy/${props.pokemonId}.gif` } />
	      <div className="caption">
	        <h3 className="text-center"><a data={props.moreInfo} onClick={props.getInfo}> {props.name} </a> </h3>
	      </div>
	    </div>
	</div>
)

export default PokeCard
