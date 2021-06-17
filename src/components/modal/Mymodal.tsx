import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type Message = {
    title: String,
    message: String,
    show: Boolean
}
const Mymodal: React.FC<Message> = (props) => {

    const [modalShow, setModalShow] = React.useState(props.show);

    return (
        <div>
            <Modal show={modalShow} onHide={true} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">{props?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>
                        D'accord
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Mymodal;