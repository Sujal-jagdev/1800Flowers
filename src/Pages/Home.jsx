import React from 'react'

let folob = [
    {
        images1: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte7faae9c9660c2c5/66a28e355c5264b275270110/flowers-same-day-delivery-silo-191119-440x440.jpg?auto=webp',
        title: "Same-Day Flower Delivery"
    },
    {
        images1: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt5b35196be36fb0f8/66992964e5f7c8606fb02545/sympathy-flowers-silo-191165-exclusiveheading-440x440.jpg?auto=webp',
        title: "Sympathy"
    },
    {
        images1: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt17030b28dd25ff08/6699296d7f59ae008999bfb5/chocolate-covered-strawberries-delivery-silo-192949-440x440.jpg?auto=webp',
        title: "Chocolate Covered Strawberries"
    },
    {
        images1: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt92a0ad0684119599/66a167ff9cd6fda3abf2454a/preserved-roses-silo-156623-440x440.jpg?auto=webp',
        title: "Love & Romance"
    },
    {
        images1: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte866eb65055bcb80/66992a2277a780359444b7c7/plants-silo-101980-exclusiveheading-440x400.jpg?auto=webp',
        title: "Plants"
    },
    {
        images1: 'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt711f7ab6f3fdb950/66a7d52197164414309d0648/bouquet-of-the-month-july-red-roses-silo-194201-440x440.jpg?auto=webp',
        title: "Bouquet of the Month"
    },
]
const Home = () => {
    return (
        <>
            <div className='HomePage'>
                <header className='col-12'>
                    <h5 className='text-light p-3 text-center col-12' style={{ backgroundColor: '#379B79' }}>Passport to Summer Deals! Members Save 30% </h5>
                    <div className=' col-12' style={{ height: '350px', marginTop: '-0.6%' }}>                <img className='col-12' style={{ height: '100%', objectFit: 'cover' }} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4324f2c5cb150cf4/668ed38642bfac6ad686cd0a/send-birthday-flowers-hero-fy25-summer-newcta.jpg?auto=webp" alt="" />
                    </div>
                </header>
                <section>
                    <h2 className='col-12 text-center mt-5'>Send Flowers & Exclusive Gifts</h2>
                    <div className="col-12 d-flex" style={{flexWrap: 'wrap'}}>
                        {
                            folob.map((e) => (
                                <>
                                    <div className='col-2 p-3'>
                                        <img src={e.images1} alt="" className='col-12' />
                                        <p>{e.title}</p>
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