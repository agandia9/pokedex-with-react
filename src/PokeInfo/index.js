import React, {Component} from 'react'
import { Modal } from 'react-bootstrap'
class PokeInfo extends Component {

	render(){
		let close = () => {
			this.setState({
				this.props.open = false
			})
		}
		return(
						<Modal
							  show={this.props.open}
							  onHide={close}
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
								<button onClick={close}>Close</button>
							  </Modal.Footer>
						</Modal>
				)
			}
		
}

	   export default PokeInfo
