import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class PermissonModal extends Component {
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
            <Modal.Title>!!İzin Lazım</Modal.Title>
          </Modal.Header>
          <Modal.Body>bu uygulamayı kullanabilmek için micrafon kullanımına izin veriniz.</Modal.Body>
          <Modal.Footer>
          
            <Button
              variant="secondary"
              onClick={() => {
                this.handleModal();
                this.props.permissionFail();
                //uyarı ver kullanıcı izin vermediği için oyuna başlayamazsınız .
              }}
            >
              İzin verme
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.props.permissionOkey();
                //Oyuna başla
                this.handleModal();
              }}
            >
              İzin ver
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
