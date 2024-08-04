import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { flowersData } from '../Context'

const Cart = () => {
    const [cartSdata, setcartSdata] = useState([])
    const { totalCartProduct, settotalCartProduct } = useContext(flowersData)

    const showData = () => {
        axios.get('http://localhost:8000/Cart/').then((res) => setcartSdata(res.data))
    }
    useEffect(() => {
        showData()
    }, [])
    if (cartSdata.length > 0) {
        settotalCartProduct(cartSdata[cartSdata.length - 1])
    }

    const delteProduct = (id) => {
        axios.delete(`http://localhost:8000/Cart/${id}`).then((res) => alert('Product Deleted From Cart'))
        showData()
    }

    return (
        <>
            <div className="main col-12 d-flex flex-wrap container-lg">
                {
                    cartSdata == '' ? <h2 className=' text-center col-12 mt-5'>!!Cart Is Empty!!</h2> : cartSdata.map((e) => (
                        <div className='col-lg-3 p-2 col-md-4 col-sm-6 col-12 '>
                            <img src={e.image} alt="" className=' col-12' />
                            <h5 className='text-dark'>{e.title}</h5>
                            <p className=' text-dark'>${e.price}</p>
                            <button className=' btn bg-danger text-light' onClick={() => delteProduct(e.id)}>Delete From Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart