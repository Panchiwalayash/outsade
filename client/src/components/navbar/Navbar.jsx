import React from 'react'
import {
  Link
} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

  return (
    <>
      <div >
        
        <nav >
          <span>Inventory</span>
          <button className="btn" id="btn1" ><Link to="/login">Login</Link></button>
          <button className="btn" id="btn2" ><Link to="/signup">Signup</Link></button>
        </nav>
      </div>
    </>
  )
}

export default Navbar