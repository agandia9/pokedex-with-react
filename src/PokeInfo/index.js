import React, {Component} from 'react'
import { Modal } from 'react-bootstrap'
import './PokeInfo.css'
class PokeInfo extends Component {
	constructor(props) {
    super(props);
    
}
	

	render(){
		return(
						<Modal
							  show={this.props.open}
							  onHide={this.props.handleClose}
							  container={this.props.info.description}
							  aria-labelledby="contained-modal-title"
							>
							  <Modal.Header closeButton className={this.props.info ? this.props.info.type.join(' ') : ''}>
								<Modal.Title id="contained-modal-title"><h3>{this.props.info ? this.props.info.name.substr(0,1).toUpperCase() + this.props.info.name.substr(1) : ''}</h3></Modal.Title>
							  </Modal.Header>
							  <Modal.Body>
								<h4>Types: {this.props.info ? this.props.info.type.join(', ') : ''}</h4>
								<h4>Abilities: {this.props.info ? this.props.info.abilities.join(', ') : ''}</h4>
							
							<h4>Moveset</h4>
							<div className="row list-moves">
								  {
								  	this.props.info.moves ? this.props.info.moves.map((m)=> <div className= "col-sm-3 col-md-2 thumbnail"><p>{m}</p></div>) : ''
								  }
							</div>

							  </Modal.Body>
							  <Modal.Footer>
							
								<button onClick={this.props.handleClose}>Close</button>
							  </Modal.Footer>
						</Modal>
				)
			}
		
}

	   export default PokeInfo
