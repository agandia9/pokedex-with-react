import React from 'react'
import './PokeCard.css'

const PokeCard = (props) => (
	  <div className="col-sm-4 col-md-3 ">
	    <div className="thumbnail img-fixed">
			<img src={`http://www.pokestadium.com/sprites/xy/${props.name}.gif` }/>
	      <div className="caption">
	        <h3 className="text-center"><a data={props.moreInfo} onClick={props.getInfo}> {props.name} </a> </h3>
	      </div>
	    </div>
	</div>
)

export default PokeCard
