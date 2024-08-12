import React from 'react'
import '../Styles/NewArrivalsSIdeBar.css'
import NewArrivalsRight from './NewArrivalsRight'

const NewArrivalsSIdeBar = () => {
  return (
    <div>
      <div className='newArrivalBody'>
        <div className='Filters'>
          <p>Filters</p>
        
          <hr/>
          <div className='FilterOptions'>
            <div className='filterOption'>
              <h4>Color</h4>
              <div className='checkBoxes'>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> Black</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> Blue</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p>  <input type="checkbox" name="" id="" /> Green</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p>  <input type="checkbox" name="" id="" /> White</p>
                  </div>
              </div>
            </div>
            <div className='filterOption'>
              <h4>Device</h4>
              <div className='checkBoxes'>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Phone</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Laptop</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Tab</p>
                  </div>
              </div>
            </div>
            <div className='filterOption'>
              <h4>Device</h4>
              <div className='checkBoxes'>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Phone</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Laptop</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Tab</p>
                  </div>
              </div>
            </div>
            <div className='filterOption'>
              <h4>Device</h4>
              <div className='checkBoxes'>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Phone</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Laptop</p>
                  </div>
                  <div className='checkBoxTexts'>
                    <p> <input type="checkbox" name="" id="" /> For Tab</p>
                  </div>
              </div>
            </div>
              
            </div>
          <div></div>

        </div>
        <div className='products'>
          <NewArrivalsRight/>
        </div>
        
        </div>
    </div>
  )
}

export default NewArrivalsSIdeBar
