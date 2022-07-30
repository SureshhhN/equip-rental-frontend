import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className='container-fluid'>
     <img className='brand' src='https://www.totalsafety.com/wp-content/themes/totalsafety/images/clients/Scott.png'/>
        <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center '>Why Us ?</h1>
            <hr />
            <p className='des'>"SCOTT Equip-Rental" is one of the famous rental website in India. We're Proud to say that our Websites contains huge amount of Branded products for rental with High-Quality and Lower-Price. Our lifetime goal is to provide the valuable Products and equipments to your Doorsteps. </p>
          </div>
        </div>
      </div>
      <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center '>Our Services</h1>
            <hr />
            <ul className='des'>
              <li>Equipment Rental Services</li>
              <li>Camera rental services</li>
              <li>Laptop rental services</li>
              <li>Speaker rental services</li>
              <li>Generator rental services</li>
              <li>Fast delivery</li>
              <li>Customer support</li>
            </ul>
          </div>
        </div>
      </div>
     <Product/>
    </div>
  )
}

export default Home