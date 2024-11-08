import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {

  const [videoDetails, SetVideoDetails] = useState({
    caption: "", imgURL: "", youtubeURL: ""
  })
  const [invalidYoutubeLink,setInvalidYoutubeLink] = useState(false)

  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedURL = (link) => {
    if (link.includes("v=")) {
      const videoid = link.split("v=")[1].slice(0, 11)
      console.log(videoid);
      SetVideoDetails({...videoDetails,youtubeURL:`https://www.youtube.com/embed/${videoid}`})
      setInvalidYoutubeLink(false)
    } else {
      SetVideoDetails({ ...videoDetails, youtubeURL: "" })
      setInvalidYoutubeLink(true)
    }
  }

  const handleUpload = () =>{
    const{caption,imgURL,youtubeURL} = videoDetails
    if (caption && imgURL && youtubeURL) {
      // proccede to api call
    } else {
      toast.warning("please fil the form completely")
    }
  }

  return (

    <>
      <div className='d-flex justify-content-center align-items-center'>
        <h2 className='fw-bolder'>Upload video</h2>
        <button onClick={handleShow} className='btn rounded-circle fw-bolder ms-3 bg-success'>+</button>
      </div>

      {/* Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-info'>Please Fill The Following Details..,</p>
          <div className='border rounded p-3'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => SetVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImgUrl"
              label="Image"
              className="mb-3"
            >
              <Form.Control onChange={e => SetVideoDetails({ ...videoDetails, imgURL: e.target.value })} type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputUrl"
              label="Url"
              className="mb-3"
            >
              <Form.Control onChange={e => getEmbedURL(e.target.value)} type="text" placeholder="" />
            </FloatingLabel>
            {
              invalidYoutubeLink &&
              <div className='text-danger fw-bolder'>
              Invalid Youtube Link
            </div>
            }
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>

  )
}

export default Add