import React, { useContext, useEffect, useState } from 'react'
import logo2 from '../assets/logo2.png'
import { flowersData } from '../Context.jsx'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'

import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const { setSummer } = useContext(flowersData)
    let Summerr = 'http://localhost:8000/Summer'
    let Birthday = 'http://localhost:8000/Birthday'
    let Sympathy = 'http://localhost:8000/Sympathy'
    let Flowers = 'http://localhost:8000/Flowers'
    let Plants = 'http://localhost:8000/Plants'
    let Description = 'http://localhost:5173/description'

    const [FlowersList1, setFlowersList1] = useState([])
    const [FlowersList2, setFlowersList2] = useState([])
    const [FlowersList3, setFlowersList3] = useState([])
    const [FlowersList4, setFlowersList4] = useState([])

    let FlowersListAPI = {
        API1: 'http://localhost:8000/FlowersList1',
        API2: 'http://localhost:8000/FlowersList2',
        API3: 'http://localhost:8000/FlowersList3',
        API4: 'http://localhost:8000/FlowersList4',
    }

    useEffect(() => {
        axios.get(FlowersListAPI.API1).then((res) => setFlowersList1(res.data))
        axios.get(FlowersListAPI.API3).then((res) => setFlowersList2(res.data))
        axios.get(FlowersListAPI.API3).then((res) => setFlowersList3(res.data))
        axios.get(FlowersListAPI.API4).then((res) => setFlowersList4(res.data))
    }, [])

    return (
        <>
            <div className='HomePage'>
                <header className='col-12'>
                    <h5 className='text-light p-3 text-center col-12' style={{ backgroundColor: '#379B79' }}>Passport to Summer Deals! Members Save 30% </h5>
                    <div className=' col-12' style={{ height: '350px', marginTop: '-0.6%' }}>          <Link to={'/summer'} onClick={() => setSummer(Birthday)}>      <img className='col-12' style={{ height: '100%', objectFit: 'cover' }} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4324f2c5cb150cf4/668ed38642bfac6ad686cd0a/send-birthday-flowers-hero-fy25-summer-newcta.jpg?auto=webp" alt="" /></Link>
                    </div>
                </header>

                <section className=' container-lg'>
                    <h2 className='col-12 text-center mt-5'>Send Flowers & Exclusive Gifts</h2>
                    <div className="col-12 d-flex" style={{ flexWrap: 'wrap' }}>
                        {
                            FlowersList1.map((e) => (
                                <>

                                    <Link to={'/summer'} onClick={() => setSummer(Summerr)} className='col-lg-2 p-1 col-md-4 col-sm-6 col-4 text-decoration-none text-dark'>
                                        <img src={e.image} alt="" className='col-12' />
                                        <p>{e.title}</p>
                                    </Link>
                                </>
                            ))
                        }
                    </div>
                </section>

                <div className='col-12 container-lg mt-4 overflow-hidden d-lg-block d-md-block d-sm-block d-none' style={{ position: 'relative' }}>
                    <div className='col-12' >
                        <img className='col-12' src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc4d490e96bce8487/66a7d6fb7cd4c92b2c394c24/love-shack-fancy-zone-10-banner-fy25-summer.jpg?auto=webp" alt="" />
                    </div>
                    <div className='col-12 d-flex align-items-center justify-content-center flex-column ' style={{ position: 'absolute', top: '30%' }}>
                        <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
                            <img className='col-12' src={logo2} alt="" />
                        </div>
                        <p className='col-lg-3 text-center mt-lg-2 col-md-6 col-sm-12 col-12'>We’re sorry to interrupt this daydream, but these limited-edition (and oh-so-dreamy) pieces won’t be here for long.</p>
                        <Link to={'/summer'}><button onClick={() => setSummer(Birthday)} className=' btn bg-light text-dark fw-bold'>Shop The Collection</button></Link>
                    </div>
                </div>

                <section className=' container-lg'>
                    <h2 className='col-12 text-center mt-5'>Sweet & Savory Surprises</h2>
                    <div className="col-12 d-flex" style={{ flexWrap: 'wrap', cursor: 'pointer' }}>
                        {
                            FlowersList2.map((e) => (
                                <>
                                    <Link to={'/summer'} onClick={() => setSummer(Sympathy)} className='col-lg-2 p-1 col-md-4 col-sm-6 col-4 text-decoration-none text-dark'>
                                        <img src={e.image} alt="" className='col-12' />
                                        <p>{e.title}</p>
                                    </Link>
                                </>
                            ))
                        }
                    </div>
                </section>

                <div className=' container-lg col-12'>
                    <Link to={'/summer'} onClick={() => setSummer(Summerr)}><img className='col-12 p-3' src={img1} alt="" style={{ cursor: 'pointer' }} /></Link>
                    <div className='col-12'>
                        <Link to={'/summer'} onClick={() => setSummer(Summerr)}>
                            <img src={img2} alt="" className='col-lg-6 col-md-6 col-sm-6 col-12 p-3' style={{ cursor: 'pointer' }} />
                            <img src={img3} alt="" className='col-lg-6 col-md-6 col-sm-6 col-12 p-3' style={{ cursor: 'pointer' }} />
                        </Link>
                    </div>
                </div>

                <div className='col-12 container-lg mt-3' >
                    <Link to={'/summer'} onClick={() => setSummer(Sympathy)}><img src={img4} alt="" className='col-12 p-1' style={{ cursor: 'pointer' }} /></Link>
                </div>


                <div className='col-12 container-lg mt-3' >
                    <Link to={'/summer'} onClick={() => setSummer(Birthday)}>
                        <img src={img5} alt="" className='col-lg-6 col-md-6 col-sm-6 col-12 p-1' style={{ cursor: 'pointer' }} />
                        <img src={img6} alt="" className='col-lg-6 col-md-6 col-sm-6 col-12 p-1' style={{ cursor: 'pointer' }} /></Link>
                </div>

                {/* ###### Slider ###### */}
                <h2 className=' text-center mt-4'>Trending Flowers & Gifts</h2>
                <div className='col-12 container-lg d-flex' style={{ overflow: 'scroll', overflowY: 'hidden' }}>
                    {
                        FlowersList4.map((e) => (
                            <div className='col-lg-2 p-1 col-md-2 col-sm-3 col-5' style={{ cursor: 'pointer' }}>
                                <Link to={'/summer'} onClick={() => setSummer(Flowers)} className=' text-decoration-none text-dark'>
                                    <img src={e.image} alt="" className='col-12' />
                                    <div className='col-12 p-1' >
                                        <p>{e.title}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>

                <div className="container-lg mt-5">
                    <Link to={'/summer'} onClick={() => setSummer(Birthday)} className="row">
                        <div className="col-6 col-md-3 p-2">
                            <img src={img8} alt="Description 1" className="img-fluid" />
                        </div>
                        <div className="col-6 col-md-3 p-2">
                            <img src={img9} alt="Description 2" className="img-fluid" />
                        </div>
                        <div className="col-6 col-md-3 p-2">
                            <img src={img10} alt="Description 3" className="img-fluid" />
                        </div> 
                        <div className="col-6 col-md-3 p-2">
                            <img src={img11} alt="Description 4" className="img-fluid" />
                        </div>
                    </Link>
                </div>

                <div className='col-12 container-lg'>
                    <Link to={'/summer'} onClick={() => setSummer(Summerr)}><img src={img7} alt="" className='col-12 mt-4' style={{ cursor: 'pointer' }} /></Link>
                </div>

                <div className='container-lg mt-3' style={{ backgroundColor: 'lightgray' }}>
                    <h3 className=' text-center p-3'>Some of the Great Things Our Customers Say About Us</h3>
                    <div className='col-12 d-flex align-items-center text-center flex-wrap'>

                        <Link to={`${Description}/18`} className='col-lg-3 col-md-6 col-sm-6 col-12 d-flex align-items-center text-center flex-column p-2 text-decoration-none text-dark' style={{ cursor: 'pointer', borderRight: '1px solid black' }}>
                            <div className='col-3 '>
                                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=100&auto=webp" alt="" className='col-12' />
                            </div>
                            <p>★★★★★</p>
                            <h4>Beautiful</h4>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"Pamela</p>
                            <p>–Pamela</p>

                        </Link>

                        <Link to={`${Description}/27`} className=' col-lg-3 col-md-6 col-sm-6 col-12 d-flex align-items-center text-center flex-column p-2 text-decoration-none text-dark' style={{ cursor: 'pointer', borderRight: '1px solid black' }}>
                            <div className='col-3 '>
                                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=100&auto=webp" alt="" className='col-12' />
                            </div>
                            <p>★★★★★</p>
                            <h4>Best Flowers</h4>
                            <p>"These flowers are beautiful and just as vibrant as the picture. One of the most beautiful bouquets I have ever seen!"</p>
                            <p>– Michelle</p>
                        </Link>

                        <Link to={`${Description}/50`} className=' col-lg-3 col-md-6 col-sm-6 col-12 d-flex align-items-center text-center flex-column p-2 text-decoration-none text-dark' style={{ cursor: 'pointer', borderRight: '1px solid black' }}>
                            <div className='col-3 '>
                                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=100&auto=webp" alt="" className='col-12' />
                            </div>
                            <p>★★★★★</p>
                            <h4>Very Happy!</h4>
                            <p>"I love how the recipient can plant the roses and enjoy them for a long time. The plant is healthy and the candle I ordered with it smells great!"</p>
                            <p>– Betty</p>
                        </Link>

                        <Link to={`${Description}/2`} className=' col-lg-3 col-md-6 col-sm-6 col-12 d-flex align-items-center text-center flex-column p-2 text-decoration-none text-dark' style={{ cursor: 'pointer' }}>
                            <div className='col-3 '>
                                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt345841a83a3efa97/6238bb5a8ee56a1b0ac2fa6d/web_icons_125x125_Gourmet_Drizzled_Berries-v2.webp?quality=100&auto=webp" alt="" className='col-12' />
                            </div>
                            <p>★★★★★</p>
                            <h4>Sweet Anniversary</h4>
                            <p>"The strawberries arrived on time and were fantastic as always. Definitely made my anniversary a lot sweeter!"</p>
                            <p>– Brian</p>
                        </Link>

                    </div>
                </div>

                <div className='col-12 container-lg'>
                    <img src={img12} className='col-12 ' alt="" />
                </div>
                    
            </div>
        </>
    )
}

export default Home