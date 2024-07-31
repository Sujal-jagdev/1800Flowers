import React from 'react'
import Sidebar from '../Components/Sidebar'

const Summer = () => {
    return (
        <>
            <div className=' container-lg col-12 mt-4'>

                <div className='col-12 d-lg-flex justify-content-between'>
                    <h3 className='col-lg-5 col-md-12 col-12' >Summer Flower Arrangements, Bouquets & Gifts</h3>
                    <p className='col-lg-6 col-md-12 col-12'>It’s the season to celebrate, and we have more ways than ever to send a smile! From colorful summer flower arrangements, bouquets & summer wreaths to blooming summer plants, long stem sunflowers, & fun summer gifts for delivery, trust us to help you celebrate the season!</p>
                </div>

                <div className='d-flex'>
                    <Sidebar/>
                    <div className='col-9'>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summer