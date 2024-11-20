import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/LandingImg.gif'
import { Card } from 'react-bootstrap'
import Manage from '../assets/Manage.png'
import Category from '../assets/Category.png'
import History from '../assets/History.jpg'
const Landing = () => {
  return (
    <>
      <div className='landingSection container'>
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <h3>Welcome to <span className='text-danger'>Media Player</span></h3>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores porro magni eaque nam dolore nobis nesciunt praesentium, odio laborum esse quae recusandae cupiditate blanditiis voluptatibus eveniet rem dignissimos maxime.</p>
            <Link to={"/home"} className='btn btn-info my-3'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-5">
            <img width={"100%"} height={"400px"} src={LandingImg} alt="landing page" />
          </div>
        </div>
        <div className='features'>
          <h1 className='text-center fw-bolder my-5'>Features</h1>
         <div className='row align-items-center'>
            <div className="col-lg-3 my-3">
              <Card className='p-2' style={{ width: '350px',height:"400px" }}>
                <Card.Img className='' height={"300px"} variant="top" src={Manage} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    Users can upload,view and remove videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg"></div>
            <div className="col-lg-3 my-3">
            <Card className='p-2' style={{ width: '350px',height:"400px" }}>
                <Card.Img className='' height={"300px"} variant="top" src={Category} />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>
                    Users can create different category
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg"></div>
            <div className="col-lg-4 my-3">
            <Card className='p-2' style={{ width: '350px',height:"400px" }}>
                <Card.Img className='' height={"300px"} variant="top" src={History} />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    Users can manage the history of videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
         </div>
        </div>
        <div className="row align-items-center my-5 border rounded p-5">
          <div className="col-lg-5">
            <h1>Simple,Fast and Powerful</h1>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum culpa, ipsa aperiam ullam porro. Tempora fugiat ea optio. Quae laborum dolorum, recusandae vitae suscipit ratione saepe reprehenderit sapiente accusamus.</p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="420" src="https://www.youtube.com/embed/TGUizrktRQ0" title="Fast &amp; Furious 6: Family reunion HD CLIP"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing