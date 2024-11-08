import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <Navbar style={{width:"100%"}} className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
              <h3 className='text-dark fs-1 fw-bolder'> <i className="fa-solid fa-file-video "></i> Media Player</h3>
          </Link>
        </Container>
      </Navbar>
    
  )
}

export default Header