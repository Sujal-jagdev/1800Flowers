import React, { useContext, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { flowersData } from '../Context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Services/firebase';
import axios from 'axios';

const Navbar = () => {
  const [provider, setProvider] = useState('')
  const { setSummer, totalCartProduct, search, setSearch, LogSuccess, Summerr, Birthday, Flowers, Plants, Gift_Baskets, Sympathy } = useContext(flowersData);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  axios.get('http://localhost:8000/RegisterData').then((res) => {
    res.data.map((e) => setProvider(e.Name));
  });

  return (
    <div className="ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5 ps-md-5 pe-md-5 col-12 " style={{ backgroundColor: '#fff' }}>

      <nav>
        <div className="Nav-1 d-flex col-12 align-items-center justify-content-between ps-lg-5 pe-lg-5 ">
          <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"><RiMenuSearchLine className='fs-3' /></button>
          <Link to={'/'}><img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=100&auto=webp" alt="" className='mt-1' style={{ height: '60px', width: '110px' }} /></Link>
          <div className="serach col-6 d-flex d-lg-block d-none ps-2">
            <input type="text" onKeyPress={(e)=>{
              if (e.key === "Enter") {
                navigate('/summer');
              }
            }} onChange={(e) => setSearch(e.target.value)} value={search} style={{ outline: 'none' }} className='col-9 p-2' placeholder='What Are You Looking For?' />
            <Link to={search ? '/summer' : ''} onClick={() => search ? setSummer(Summerr) : ''}><button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px', marginTop: '-6px' }}>SEARCH</button></Link>
          </div>

          <div className="option d-lg-flex d-md-flex col-lg-3 col-md-4 gap-5 align-items-center pt-3 justify-content-end d-sm-none d-none">
            <Link to={user || LogSuccess ? '' : '/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'>{user ? <img src={user.photoURL} className='col-6' style={{ borderRadius: '50px' }} /> : <CiUser className='fs-2' />}{user ? user.displayName : LogSuccess ? provider : 'Sign In'}</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark'><CiDeliveryTruck className='fs-2' />MyOrders</Link>
            <Link to={'/cart'} className='d-flex flex-column align-items-center text-decoration-none text-dark'><BsCart2 className='fs-2' />({totalCartProduct})Cart</Link>
          </div>
        </div>
        <hr />
        <div className="Nav-2 d-lg-flex align-items-center justify-content-between col-12 d-md-none d-sm-none d-none container-lg">
          <Link to={'/summer'} onClick={() => setSummer(Summerr)} className='text-decoration-none text-dark'><h6 >Summer </h6></Link>
          <Link to={'/summer'} onClick={() => setSummer(Birthday)} className='text-decoration-none text-dark' style={{ cursor: 'pointer' }}><h6>Birthday</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Sympathy)} style={{ cursor: 'pointer' }}>Sympathy</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Flowers)} style={{ cursor: 'pointer' }}>Flowers</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Plants)} style={{ cursor: 'pointer' }}>Plants</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Gift_Baskets)} style={{ cursor: 'pointer' }}>Gift Baskets & Food</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Birthday)} style={{ cursor: 'pointer' }}>Gifts & More</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Summerr)} style={{ cursor: 'pointer' }}>Sale</h6></Link>
          <Link to={'/summer'} className='text-decoration-none text-dark'><h6 onClick={() => setSummer(Sympathy)} style={{ cursor: 'pointer' }}> Community</h6></Link>
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
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className='col-9 p-2' placeholder='What Are You Looking For?' />

            <Link to={search ? '/summer' : ''} onClick={() => search ? setSummer(Summerr) : ''}> <button className='btn text-light' style={{ backgroundColor: '#522C73', height: '45px' }}>SEARCH</button></Link>
          </div>

          <div className="option d-flex gap-5 align-items-center pt-3 col-12 justify-content-center">
            <Link to={user ? '' : '/login'} className='d-flex flex-column align-items-center text-decoration-none text-dark'>{user ? <img src={user.photoURL} className='col-6' style={{ borderRadius: '50px' }} /> : <CiUser className='fs-2' />}{user ? user.displayName : 'SignIn'}</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark'><CiDeliveryTruck className='fs-2' />MyOrders</Link>
            <Link className='d-flex flex-column align-items-center text-decoration-none text-dark' to={'/cart'}><BsCart2 className='fs-2' />(0)Cart</Link>
          </div>

          <div className="Links mt-3">
  
            <Link to={'/summer'} className='text-decoration-none text-dark' onClick={() => setSummer(Summerr)}><h5 className='d-flex justify-content-between ms-3 me-3 text-decoration-none text-dark' style={{ height: '40px' }}>Summer<IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} className='text-decoration-none text-dark'><h5 onClick={() => setSummer(Birthday)} className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px', cursor: 'pointer' }}>Birthday <IoIosArrowForward /> </h5></Link>
            <Link to={'/summer'} className='text-decoration-none text-dark' onClick={() => setSummer(Sympathy)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Sympathy <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} className='text-decoration-none text-dark' onClick={() => setSummer(Gift_Baskets)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Occasions <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} className='text-decoration-none text-dark' onClick={() => setSummer(Flowers)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Flowers <IoIosArrowForward /></h5></Link>

            <Link to={'/summer'} className='text-decoration-none text-dark' onClick={() => setSummer(Plants)}><h5 className='d-flex justify-content-between ms-3 me-3' style={{ height: '40px' }}>Plants <IoIosArrowForward /></h5></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
