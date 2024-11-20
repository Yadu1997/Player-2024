import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI, removeVideoHistoryAPI } from '../Services/allAPI'

const History = () => {
  const[videoHistory,setVideoHistory] = useState([])
  // console.log(videoHistory);
  useEffect(()=>{
    getAllHistory()
  },[])
  const getAllHistory = async () =>{
    try {
      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleRemoveHistory = async (videoId) =>{
    try {
      await removeVideoHistoryAPI(videoId)
      getAllHistory()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <h3>Watch History</h3>
          <Link to={'/home'}>Back to Home</Link>
        </div>
        {
          videoHistory.length > 0 ?
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
            {
              videoHistory?.map((item,index)=>(
              <tr key={item?.id}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><a style={{textDecoration:"none"}} href="" target='_blank'>{item?.youtubeURL}</a></td>
                <td>{item?.timeStamp}</td>
                <td><div onClick={()=>{handleRemoveHistory(item?.id)}} className="fa-solid fa-trash text-danger"></div></td>
              </tr>
              ))
            }
          </tbody>
        </table>
        :
        <div><h3 className='text-danger fw-bolder text-center'>History is Empty</h3></div>
        }
      </div>
    </>
  )
}

export default History