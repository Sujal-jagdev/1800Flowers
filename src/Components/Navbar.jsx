import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5 ps-md-5 pe-md-5 col-12 " style={{ backgroundColor: '#fff' }}>
      <nav>
        <div className="Nav-1 d-flex col-12 align-items-center justify-content-between ps-lg-5 pe-lg-5 ">
          <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"><RiMenuSearchLine className='fs-3' /></button>
          <Link to={'/'}><img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp" alt="" className='mt-1' style={{ height: '60px', width: '110px' }} /></Link>
          <div className="serach col-6 d-flex d-lg-block d-none ps-2">
            <input type="text" style={{ outline: 'none' }} className='col-9 p-2' placeholder='What Are You Looking For?' />
            <button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px', marginTop: '-6px' }}>SEARCH</button>
          </div>
          <div className="option d-lg-flex d-md-flex col-lg-3 col-md-4 gap-5 align-items-center pt-3 justify-content-end d-sm-none d-none">
            <Link to={'/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'><CiUser className='fs-2' />SignIn</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark'><CiDeliveryTruck className='fs-2' />MyOrders</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark'><BsCart2 className='fs-2' />(0)Cart</Link>
          </div>
        </div>
        <hr />
        <div className="Nav-2 d-lg-flex align-items-center justify-content-between col-12 d-md-none d-sm-none d-none container-lg">
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6>Summer </h6></Link>
          <h6>Birthday</h6>
          <h6>Sympathy</h6>
          <h6>Flowers</h6>
          <h6>Plants</h6>
          <h6>Gift Baskets & Food</h6>
          <h6>Gifts & More</h6>
          <h6>Sale</h6>
          <h6>Community</h6>
        </div>
      </nav>

      {/* Off Canvas */}
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
        <div class="offcanvas-header">
          <Link to={'/'}> <img id="offcanvasLeftLabel" src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp" alt="" className='mt-1' style={{ height: '60px', width: '110px' }} /></Link>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div className="serach col-12 text-end d-flex">
            <input type="text" className='col-9 p-2' placeholder='What Are You Looking For?' />
            <button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px' }}>SEARCH</button>
          </div>

          <div className="option d-flex gap-5 align-items-center pt-3 col-12 justify-content-center">
            <Link to={'/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'><CiUser className='fs-2' />SignIn</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark'><CiDeliveryTruck className='fs-2' />MyOrders</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark'><BsCart2 className='fs-2' />(0)Cart</Link>
          </div>

          <div className="Links mt-3">
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Summer <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Birthday <IoIosArrowForward /> </h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Sympathy <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Occasions <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Flowers <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Plants <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Gift Baskets & Food <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Gifts & More <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Same-Day Delivery <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Sale <IoIosArrowForward /></h5>
            <h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Community <IoIosArrowForward /></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
