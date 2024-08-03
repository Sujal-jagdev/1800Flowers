import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { flowersData } from '../Context'

const Description = () => {
    const [getData, setgetData] = useState({})
    const { Summer } = useContext(flowersData)
    const { id } = useParams()
    useEffect(() => {
        axios.get(`${Summer}/${id}`).then((res) => setgetData(res.data)).catch((err) => console.log(err))
    }, [id])

    const postToCart = () => {
        const productData = {
            title: getData.title,
            price: getData.price,
            image: getData.image
        };
        axios.post(`http://localhost:8000/Cart/`, productData).then((res) => alert('Posted')).catch((err) => console.log(err))
    }
    return (
        <>
            <div className=' container-lg col-12 d-flex flex-wrap mt-4 d-flex justify-content-center'>

                <div className='col-lg-5 col-md-7 col-12'>
                    <img src={getData.image} alt="" className='col-12 m-auto' />
                </div>
                <div className='col-lg-7 p-3 col-md-12 col-12'>
                    <h3>{getData.title}</h3>
                    <p>Passport Eligible</p>
                    <h5>Price: ${getData.price}</h5>
                    <h6>Category: {getData.category}</h6>
                    <hr />
                    <p className='d-flex lh-sm mt-4 align-items-center col-12'><input type="checkbox" style={{ height: '20px', width: '20px' }} /><span className='ms-3'>Subscribe and save 15% Set your frequency and duration. Skip, pause, or cancel anytime.</span> </p>
                    <hr />
                    <p className='d-flex lh-sm mt-4 align-items-center col-12'><input type="checkbox" style={{ height: '20px', width: '20px' }} /><span className='ms-3'>Free Shipping/No Service Charge on Eligible Items for One Full Year for Only $19.99. Automatically Renews for $29.99/Year after your first year.</span></p>
                    <Link><button onClick={postToCart} className=' btn col-12 bg-success text-light mt-5'>Add To Cart</button></Link>
                </div>
            </div>
        </>
    )
}

export default Description