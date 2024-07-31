import React, { useContext } from 'react'
import logo2 from '../assets/logo2.png'
import { flowersData } from '../Context.jsx'

const Home = () => {
    const { data1, setdata1, data2, setData2 } = useContext(flowersData)
    return (
        <>
            <div className='HomePage'>
                <header className='col-12'>
                    <h5 className='text-light p-3 text-center col-12' style={{ backgroundColor: '#379B79' }}>Passport to Summer Deals! Members Save 30% </h5>
                    <div className=' col-12' style={{ height: '350px', marginTop: '-0.6%' }}>                <img className='col-12' style={{ height: '100%', objectFit: 'cover' }} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4324f2c5cb150cf4/668ed38642bfac6ad686cd0a/send-birthday-flowers-hero-fy25-summer-newcta.jpg?auto=webp" alt="" />
                    </div>
                </header>
                <section className=' container-lg'>
                    <h2 className='col-12 text-center mt-5'>Send Flowers & Exclusive Gifts</h2>
                    <div className="col-12 d-flex" style={{ flexWrap: 'wrap' }}>
                        {
                            data1.map((e) => (
                                <>
                                    <div className='col-lg-2 p-1 col-md-4 col-sm-6 col-4'>
                                        <img src={e.image } alt="" className='col-12' />
                                        <p>{e.title }</p>
                                    </div>
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
                        <p className='col-lg-3 text-center mt-2 col-md-6 col-sm-12 col-12'>We’re sorry to interrupt this daydream, but these limited-edition (and oh-so-dreamy) pieces won’t be here for long.</p>
                        <button className=' btn bg-light text-dark fw-bold'>Shop The Collection</button>
                    </div>
                </div>

                <section className=' container-lg'>
                    <h2 className='col-12 text-center mt-5'>Send Flowers & Exclusive Gifts</h2>
                    <div className="col-12 d-flex" style={{ flexWrap: 'wrap' }}>
                        {
                            data2.map((e) => (
                                <>
                                    <div className='col-lg-2 p-1 col-md-4 col-sm-6 col-4'>
                                        <img src={e.image } alt="" className='col-12' />
                                        <p>{e.title }</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </section>

            </div>
        </>
    )
}

export default Home