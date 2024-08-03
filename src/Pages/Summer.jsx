import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios';
import { flowersData } from '../Context';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

const Summer = () => {
    const [sort, setSort] = useState(null)
    const [orderDecide, setorderDecide] = useState('')
    const [load, setload] = useState(true)
    const handleChange = (e) => {
        setSort(e)
        setorderDecide(true)
    }
    const { summerData, setSummerData, Summer, category, setCategory, pricess, page, setpage } = useContext(flowersData)
    let my = 0
    const getData = () => {
        axios.get(Summer, {
            params: {
                category: category,
                _page: page,
                _limit: 15,
                _sort: orderDecide ? 'price' : '',
                _order: sort
            }
        }).then((res) => {
            setSummerData(res.data);
            setload(false)

        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [page, category, pricess, Summer, setSummerData, sort, load])

    if (summerData.length > 0) {
        my = summerData[summerData.length - 1];
    }

    return (
        <>
            <div className=' container-lg col-12 mt-4'>

                <div className='col-12 d-lg-flex justify-content-between'>
                    <h3 className='col-lg-5 col-md-12 col-12' >Summer Flower Arrangements, Bouquets & Gifts</h3>
                    <p className='col-lg-6 col-md-12 col-12'>It’s the season to celebrate, and we have more ways than ever to send a smile! From colorful summer flower arrangements, bouquets & summer wreaths to blooming summer plants, long stem sunflowers, & fun summer gifts for delivery, trust us to help you celebrate the season!</p>
                </div>

                <div className='d-flex'>
                    <div className='col-3 d-lg-block d-md-none d-sm-none d-none p-2'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-9 col-12'>

                        <header className='col-12 d-lg-flex d-md-flex d-sm-flex justify-content-between align-items-center '>
                            <h5 className=' text-center'>{my.id} Results</h5>
                            <div className='d-flex align-items-center justify-content-between col-lg-4 col-md-7 col-sm-8'>
                                <select name="" id="" className='p-1 col-lg-10 col-md-7 col-sm-7 col-7' onChange={(e) => handleChange(e.target.value)}>
                                    <option value={null}>Sort By</option>
                                    <option value="desc">High To Low</option>
                                    <option value="asc">Low To High</option>
                                </select>
                                <button className='d-lg-none d-block btn border border-3 col-md-3 col-sm-3 col-4' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Filters</button>
                            </div>
                        </header>

                        <div className="main col-12 d-flex flex-wrap">
                            {
                                load ? <Loader/> : summerData.filter(e => pricess ? e.price < 75 : true).map((e) => (
                                    <div className='col-lg-4 p-2 col-md-4 col-sm-6 col-6'>
                                        <Link to={`/description/${e.id}`} className='text-decoration-none'>
                                            <img src={e.image} alt="" className=' col-12' />
                                            <h5 className='text-dark'>{e.title}</h5>
                                            <p className=' text-dark'>${e.price}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h2 id="offcanvasRightLabel">Filters</h2>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body " style={{ marginTop: '-7%' }}>
                    <Sidebar />
                </div>
            </div>
            <div className='col-12 d-flex align-items-lg-center justify-content-center'>
                <button className=' btn bg-primary text-light m-2' onClick={() => setpage(page - 1)} disabled={page == 1}>Previous</button>
                <button className=' btn bg-primary text-light m-2' disabled>{page}</button>
                <button className=' btn bg-primary text-light m-2' onClick={() => setpage(page + 1)} disabled={summerData.length < 10}>next</button>
            </div>
        </>
    )
}

export default Summer