import React from 'react'
// import Form from '../../components/Form/Form'
import Navbar from '../../components/Navbar/Navbar'

const CreateCase = () => {
  return (
    <div>
      <Navbar />
      <div>
        <form className='mt-3 container'>

          <h3 className='text-center mb-4 text-color'>Create case</h3>
          <div className="row mb-4">

          <div className="mb-4">
            <label className="text-color">Case Status</label>
            <select className="form-select" aria-label="Floating label select example">
              <option disabled>Select Status</option>
              <option value="1" className="text-color"> Not started </option>
              <option value="2" className="text-color"> On going </option>
              <option value="3" className="text-color"> Done </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label text-color" for="form6Example3">Case</label>
            <input type="text" id="form6Example3" className="form-control" />
          </div> 

           <div className="col">
              <div>
                <label className="form-label text-color" for="form6Example1">Firstname</label>
               <input type="text" id="form6Example1" className="form-control" />
              </div>
            </div>
            
            <div className="col">
              <div>
               <label className="form-label text-color" for="form6Example2">Lastname</label>
                <input type="text" id="form6Example2" className="form-control" />
              </div>
            </div>
          </div>

          <div className=" mb-4">
            <label className="form-label text-color" for="form6Example7">Message</label>
            <textarea className="form-control" id="form6Example7" rows="4"></textarea>
          </div>

          <div className='d-flex justify-content-end'>
            <button type="submit" className="btn mb-4 btn-dark">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCase