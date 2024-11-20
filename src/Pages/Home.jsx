import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
const Home = () => {
  const[addVideoResponse,setAddVideoResponse] = useState([])
  const[removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState([])
  const[onDropViewResponse,setOnDropViewResponse] = useState([])
  return (
   <>
      <div className='container my-5 d-flex justify-content-between'>
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className='container-fluid'>
        <div className="row my-5">
          <div className="col-lg-6">
            <h3 className='fw-bolder'>All Videos</h3>
            <View addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse} setOnDropViewResponse={setOnDropViewResponse}/>
          </div>
          <div className="col"></div>
          <div className="col-lg-5">
            <Category setRemoveCategoryVideoResponse = {setRemoveCategoryVideoResponse} onDropViewResponse={onDropViewResponse}/>
          </div>
        </div>
      </div>
   </>
  )
}

export default Home