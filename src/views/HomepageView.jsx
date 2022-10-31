import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className='d-flex vh-100 justify-content-center align-items-center'>
          Hello, click on "Add case" to get started
        </h1>
      </div>
    </div>
  )
}

export default Homepage