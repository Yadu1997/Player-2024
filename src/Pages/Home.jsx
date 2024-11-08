import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
const Home = () => {
  return (
   <>
      <div className='container my-5 d-flex justify-content-between'>
        <Add/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className='container-fluid'>
        <div className="row my-5 ">
          <div className="col-lg-5">
            <h3>All Videos</h3>
            <View/>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <Category/>
          </div>
        </div>
      </div>
   </>
  )
}

export default Home