import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
  <div className="container-fluid " style={{paddingLeft: '10%',paddingRight: '10%'}}>
    <nav>
        <div className="Nav-1 d-flex col-12 align-items-center justify-content-between p-0">
            <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp" alt=""  className='col-1 h-100'/>
            <div className="serach col-6 text-end d-flex align-items-center">
                <input type="text"  className='col-9 p-2' placeholder='What Are You Looking For?'/>
                <button className='btn text-light'  style={{backgroundColor: '#522C73',height: '45px'}}>SEARCH</button>
            </div>
            <div className="option d-flex col-2 gap-5 align-items-center pt-3">
              <p className='d-flex '><CiUser className='fs-2'/>Sign In</p>
              <p className='d-flex flex-column'><CiDeliveryTruck className='fs-2'/>My Orders</p>
              <p className='d-flex flex-column'><BsCart2 className='fs-2'/>(0)Cart</p>
            </div>
        </div>
        <div className="Nav-2">
            
        </div>
    </nav>
  </div>
  )
}

export default Navbar
