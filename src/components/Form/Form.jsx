import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form className='mt-3 container'>

      <h3 className='text-center mb-4 text-color'>Skapa ett ärende</h3>

      <div className="row mb-4">
        <div className="col">
          <div>
            <label className="form-label text-color" for="form6Example1">Förnamn</label>
            <input type="text" id="form6Example1" className="form-control" />
          </div>
        </div>
        <div className="col">
          <div>
            <label className="form-label text-color" for="form6Example2">Efternamn</label>
            <input type="text" id="form6Example2" className="form-control" />
          </div>
        </div>
      </div>

      {/* <div className="mb-4">
        <label className="form-label" for="form6Example3">Company name</label>
        <input type="text" id="form6Example3" className="form-control" />
      </div> */}

      {/* <div className=" mb-4">
        <label className="form-label" for="form6Example4">Address</label>
        <input type="text" id="form6Example4" className="form-control" />
      </div> */}

      <div className=" mb-4">
        <label className="form-label text-color" for="form6Example5">E-post</label>
        <input type="email" id="form6Example5" className="form-control" />
      </div>

      {/* <div className=" mb-4">
        <label className="form-label" for="form6Example6">Phone</label>
        <input type="text" id="form6Example6" className="form-control" />
      </div> */}

      <div className=" mb-4">
        <label className="form-label text-color" for="form6Example7">Meddelande</label>
        <textarea className="form-control" id="form6Example7" rows="4"></textarea>
      </div>

      <div className='d-flex justify-content-end'>
        <button type="submit" className="btn mb-4 btn-color">Skicka ärende</button>
      </div>
    </form>
  )
}

export default Form