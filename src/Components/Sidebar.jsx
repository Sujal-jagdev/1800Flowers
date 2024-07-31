import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className='col-3'>
                    <h4>Filters</h4>
                    <hr />
                    <h5>Price Range</h5>
                    <p className='d-flex  align-items-center'><input type="checkbox" style={{height: '20px',width: '20px'}} />&nbsp; Under $75</p>
                    <p className='d-flex  align-items-center'><input type="checkbox" style={{height: '20px',width: '20px'}} />&nbsp; 75 to $100</p>
                    <p className='d-flex  align-items-center'><input type="checkbox" style={{height: '20px',width: '20px'}} />&nbsp; $100 to $200</p>
                    <p className='d-flex  align-items-center'><input type="checkbox" style={{height: '20px',width: '20px'}} />&nbsp; Above $200</p>
                    <hr />
            </div>
        </>
    )
}

export default Sidebar