import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class GameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  handleModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          onHide={() => {
            this.handleModal();
            window.location.reload(false);
          }}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.body}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                this.handleModal();
                window.location.reload(false);
              }}
            >
              Yeni Oyun
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
