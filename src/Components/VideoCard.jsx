import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const VideoCard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} height={'150px'} variant="top" src="" alt='image' />
      <Card.Body>
        <Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{margin:"0px"}}>Caption</p>
            <button className='btn bg-danger'><i className='fa-solid fa-trash'></i></button>
          </div>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="520" src="https://www.youtube.com/embed/1U35s_N2qfM?autoplay=1" title="Badass Fast and Furious Scenes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>


    </>
  )
}

export default VideoCard