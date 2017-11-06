import React from 'react'
import { Modal } from 'react-bootstrap'
const PokeInfo = (props)=>{
			<Modal
				  show={props.open}
				  onHide={props.open}
				  container={this}
				  aria-labelledby="contained-modal-title"
				>
				  <Modal.Header closeButton>
					<Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
				  </Modal.Header>
				  <Modal.Body>
					Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
				  </Modal.Body>
				  <Modal.Footer>
					<button onClick={props.open}>Close</button>
				  </Modal.Footer>
			</Modal>
		
}

	   export default PokeInfo
