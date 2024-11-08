import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
const View = () => {
  return (
    <>
      <Row>
        <Col className='my-3' sm={12} md={6} lg={4} xl={3}>
          <VideoCard/>
        </Col>
      </Row>
    </>
  )
}

export default View