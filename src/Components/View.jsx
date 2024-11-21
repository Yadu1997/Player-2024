import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from '../Services/allAPI'
const View = ({addVideoResponse,removeCategoryVideoResponse,setOnDropViewResponse}) => {
  const [allVideos, setAllVideos] = useState([])
  // console.log(allVideos);
  const[deleteVideoResponse,setDeleteVideoResponse] = useState("")
  useEffect(() => {
    getAllVideos()
  },[addVideoResponse,deleteVideoResponse,removeCategoryVideoResponse])

  const getAllVideos = async () => {
    try {
      const result = await getAllVideoAPI()
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data)
      } else {
        setAllVideos("")
      }
    } catch (error) {
      console.log(error);
    }
  }
  const dragOverView = (e) =>{
    e.preventDefault()
  }
  const handleCategoryVideo = async(e) =>{
    const {categoryId,videoDetails} = JSON.parse(e.dataTransfer.getData("dataShare"))
    try {
      const {data} = await getSingleCategoryAPI(categoryId)
      // console.log(data);
      const updatedCategoryVideoList = data.allVideos.filter(item=>item.id !== videoDetails.id)
      const{categoryName,id} = data
      const categoryResult = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryVideoList}) 
      const result = await addVideoAPI(videoDetails)
      setOnDropViewResponse(categoryResult.data)
      getAllVideos()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Row className='w-100' droppable={true} onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
        {
          allVideos?.length > 0 ?
            allVideos?.map(video => (
              <Col key={video?.id} className='my-3' sm={12} md={6} lg={4}>
                <VideoCard displayData = {video} setDeleteVideoResponse={setDeleteVideoResponse}/>
              </Col>
            ))
            :
            <div className='fw-bolder text-danger'>Empty List</div>
        }
      </Row>
    </>
  )
}

export default View