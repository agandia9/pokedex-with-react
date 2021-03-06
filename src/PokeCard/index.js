import React from 'react'
import './PokeCard.css'

const PokeCard = (props) => (
	  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
	    <div className="thumbnail img-fixed">
	    <div className="headerThumbnail">
			<h4>Nº {props.num +1}</h4>
			<div>
				<span onClick={props.fav} className="fa fa-star"></span>
			</div>
		</div>
			<img src={`http://www.pokestadium.com/sprites/xy/${props.pokemonId}.gif` }/>
	      <div className="caption">
	        <h3 className="text-center">
	        <a data={props.moreInfo} onClick={props.getInfo}> {props.name} </a> </h3>
	      </div>
		
	</div>
	</div>
)

export default PokeCard
