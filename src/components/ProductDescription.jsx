import React from 'react'
import'../Styles/ProductDescription.css'
import imagee from '../assets/ProductImages/A2642J11_535x.jpg'
import imagee2 from '../assets/ProductImages/8362c136631b99caa65777bf50ad55c2_1200x.jpg'

const ProductDescription = () => {
  return (
    <div>
        <div className='ProductInfoNImage'>
        <div className='sideImages'>
                <img src={imagee2} alt="" />
                <img src={imagee2} alt="" />
                <img src={imagee2} alt="" />
                <img src={imagee2} alt="" />
                <img src={imagee2} alt="" />
                <img src={imagee2} alt="" />
              </div>
            <img src={imagee} alt="" />
            <div className='ProductInfo'>
             
               <div className='productInfoName'>
                  <h2>Anker Power Bank (20,000mAh, 22.5W, Built-In USB-C Cable)</h2>
                  <div className='price'>
                     <p className='NewPricebg'>₱3,415.25</p>
                     <p className='OldPriceSm'>₱3,415.25</p>
                  </div>
                  <hr />
               </div>
               <p>Speed up your life with Anker's 22.5W Power Bank, featuring a powerful 20,000mAh capacity and a convenient built-in USB-C cable. Ideal for charging devices quickly, it's your go-to for keeping your phone powered up 3-4 times longer. Its compact size makes it a perfect travel companion.</p>
               <a className='addToCartBtn' href="/">ADD TO CART</a>
               <a className='addToWishListBtn' href="/">ADD TO WISHLIST</a>
              <div className='paymentMethod'>
                <p>Checkout safely using your preferred payment method</p>
                <div className='BankLogos'>
                  <img src={imagee2} alt="" />
                  <img src={imagee2} alt="" />
                  <img src={imagee2} alt="" />
                  <img src={imagee2} alt="" />
                  <img src={imagee2} alt="" />
                  <img src={imagee2} alt="" />
                  <img src={imagee2} alt="" />
                </div>
              </div>
            </div>
            

        </div>
    </div>
  )
}

export default ProductDescription
