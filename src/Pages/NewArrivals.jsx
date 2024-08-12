import React from 'react'
import '../Styles/NewArrivals.css'
import NewArrivalsSIdeBar from '../components/NewArrivalsSIdeBar'
import NewArrivalsRight from '../components/NewArrivalsRight'
import NewsLetter from '../components/Newsletter'
import Footer from '../Footer'

const NewArrivals = () => {
  return (
    <div className='newArrival'>
      <div className='NewArrivalTop'>
        <h1>New Arrivals</h1>
      </div>
      <div className=''>
        <NewArrivalsSIdeBar/>
      </div>
      <NewsLetter/>
      {/* <Footer/> */}
    </div>
  
  )
}

export default NewArrivals

