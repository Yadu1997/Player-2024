import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"300px"}} className='container mt-5 w-100'>
      <div className="d-lg-flex justify-content-between align-items-center">
        <div className="intro" style={{width:"320px"}}>
          <h5 className='fw-bolder'>Media player <i className="fa-solid fa-file-video "></i> </h5>
          <p style={{textAlign:""}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, cumque? Impedit animi et consectetur magnam delectus est eligendi itaque ex ipsum laboriosam autem sed a nobis, aut accusamus, provident nesciunt?</p>
        </div>
        <div className="links d-flex flex-column">
          <h5 className='fw-bolder'>Links</h5>
          <Link to={'/'} style={{textDecoration:"none"}}>Landing</Link>
          <Link to={'/home'} style={{textDecoration:"none"}}>Home</Link>
          <Link to={'/history'} style={{textDecoration:"none"}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5 className='Fw-bolder'>Guides</h5>
          <a style={{textDecoration:"none"}} href="">React</a>
          <a style={{textDecoration:"none"}} href="">React Bootstrap</a>
          <a style={{textDecoration:"none"}} href="">React Router</a>
        </div>
        <div className="contacts d-flex flex-column">
          <h5 className='fw-bolder'>Contact Us</h5>
          <div className='d-flex'>
             <input type="text" placeholder='Enter You Email Here' className='form-control' />
             <button className='btn btn-success'><i className="fa-solid fa-paper-plane"></i></button>
          </div>
          <div className='icons mt-3 d-flex justify-content-between'>
            <a href="" target='_blank' className='fs-2'><i className="fa-brands fa-square-facebook"></i></a>
            <a href="" target='_blank' className='fs-2'><i className="fa-brands fa-square-instagram"></i></a>
            <a href="" target='_blank' className='fs-2'><i className="fa-brands fa-square-whatsapp"></i></a>
            <a href="" target='_blank' className='fs-2'><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center fw-bolder mt-3'>Copyright © protects the way a work is expressed, but not the facts, ideas, systems, or methods of operation</p>
    </div>
  )
}

export default Footer