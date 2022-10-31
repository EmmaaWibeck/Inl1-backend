import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        {/* <a className="navbar-brand me-2" to=""></a> */}

        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/'><h4 className='caseLogo'>Case</h4></Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
           <Link to='/createCases'> <button type="button" className="btn btn-primary me-3"> Add case </button></Link>
           <Link to='/allCases'> <button type="button" className="btn btn-light me-3"> See cases </button></Link>
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" className="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy"/>
          </div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar