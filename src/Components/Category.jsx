import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard'
const Category = ({setRemoveCategoryVideoResponse,onDropViewResponse}) => {
  const[categoryName,setCategoryName] = useState("")
  const[allCategories,setAllCategories] = useState([])
  // console.log(allCategories);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategory()
  },[onDropViewResponse])

  const handleAddCategory = async() =>{
    if (categoryName) {
      try {
        await addCategoryAPI({categoryName,allVideos:[]})
        setCategoryName("")
        handleClose()
        getAllCategory()
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warning("Please enter the category name")
    }
  }

  const getAllCategory = async() =>{
    try {
     const result = await getCategoryAPI()
     setAllCategories(result.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  const handleRemoveCategory = async(catId) =>{
    try {
      await deleteCategoryAPI(catId)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }
  }
  const dragOverCategory = (e) =>{
    e.preventDefault()
  }
  const videoDropped = async (e,catId) =>{
    const videoId = e.dataTransfer.getData("videoId")
    // console.log(`video with id ${videoId} dropped in category with cat id ${catId}`);
    try {
      const {data} = await getAVideoAPI(videoId)
      // console.log(data);
      let selectedCategory = allCategories?.find(item=>item.id==catId)
      selectedCategory.allVideos.push(data)
      await updateCategoryAPI(catId,selectedCategory)
      getAllCategory()
      const result = removeVideoAPI(videoId)
      setRemoveCategoryVideoResponse(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  const videoDragStarted = (e,videoDetails,categoryId) =>{
    let dataShare = {categoryId,videoDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }
  return (
    <>

      <div className="d-flex justify-content-around align-items-center">
        <h3 className='fw-bolder'>All Categories</h3>
        <button onClick={handleShow} className='btn fw-bolder rounded-circle bg-success'>+</button>
      </div>
        <div className='container-fluid'>
      {
        allCategories?.length > 0 ?
        allCategories?.map(item=>(
          <div droppable={true} onDrop={e=>videoDropped(e,item?.id)} onDragOver={e=>dragOverCategory(e)} key={item?.id} className='border p-3 w-100 my-3'>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className='fw-bolder'>{item?.categoryName}</h3>
              <button onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <div className='row mt-2'>
              {
                item.allVideos?.length > 0 &&
                item.allVideos.map(video=>(
                  <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item?.id)} key={video?.id} className='col-lg-6'>
                <VideoCard displayData={video} insideCategory = {true}/>
              </div>
                ))
              }
              
            </div>
          </div>
        ))
        :
        <div>
          <h3 className='text-danger'>Empty Category</h3>
        </div>
      }
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Category Name" className="mb-3">
            <Form.Control onChange={e=>{setCategoryName(e.target.value)}} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add Category</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={1500}/>
    </>
  )
}

export default Category