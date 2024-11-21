import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';

const VideoCard = ({displayData,setDeleteVideoResponse,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    const {caption,youtubeURL} = displayData
    const systemTime = new Date()
    // console.log(systemTime);
    const formattedDate = systemTime.toLocaleString('en-us',{timeZoneName:'short'})
    const videoHistory = {caption,youtubeURL,timeStamp:formattedDate}
    try {
      await saveHistoryAPI(videoHistory)
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveVideo = async (videoId) => {
    try {
      const result = await removeVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  const dragStarted = (e,videoId) =>{
    // console.log(`dragging started with video id ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>dragStarted(e,displayData?.id)} style={{ width: '18rem' }} className='p-3 shadow mb-3'>
      <Card.Img onClick={handleShow} height={'150px'} width={''} variant="top" src={displayData?.imgURL} alt='image' />
      <Card.Body>
        <Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{margin:"0px"}}>{displayData?.caption}</p>
            {
              !insideCategory &&
              <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn bg-danger shadow'><i className='fa-solid fa-trash'></i></button>
              }
          </div>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="520" src={`${displayData?.youtubeURL}?autoplay=1`} title="Badass Fast and Furious Scenes"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>


    </>
  )
}

export default VideoCard