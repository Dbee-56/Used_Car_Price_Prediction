import React from 'react'
import './body.css'
import Form from '../components/Form'

const Body = () => {
  return (
    <>
        <div className="body">
          <Form/>
          <div className="content">
            <div className="text">
              <h1>Enter your car details here to get Best deals!</h1>
              <h1>👈👈</h1>
            </div>
            <div className="img">
              <div className="img1"></div>
              <div className="img2"></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Body