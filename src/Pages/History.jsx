import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <h3>Watch History</h3>
          <Link to={'/home'}>Back to Home</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Video Link</th>
              <th>Time Stamp</th>
              <th><div className="fa-solid fa-ellipsis-vertical"></div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>a</td>
              <td><a style={{textDecoration:"none"}} href="" target='_blank'>www.</a></td>
              <td>12</td>
              <td><div className="fa-solid fa-trash text-danger"></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default History