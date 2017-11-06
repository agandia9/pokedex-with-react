import React, {Component} from 'react'
import { Modal } from 'react-bootstrap'
class PokeInfo extends Component {
	constructor(props) {
    super(props);
    
}
	close() {
			    this.props.open = false;
			  }

	render(){
		return(
						<Modal
							  show={this.props.open}
							  onHide={this.close}
							  container={this.props.info.description}
							  aria-labelledby="contained-modal-title"
							>
							  <Modal.Header closeButton>
								<Modal.Title id="contained-modal-title">{this.props.info.name}</Modal.Title>
							  </Modal.Header>
							  <Modal.Body>
								<p>{this.props.info.type}</p>
							  </Modal.Body>
							  <Modal.Footer>
								<button onClick={this.close}>Close</button>
							  </Modal.Footer>
						</Modal>
				)
			}
		
}

	   export default PokeInfo
