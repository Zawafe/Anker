import React from 'react'
import { useState } from 'react'

import '../Styles/NewArrivalsRight.css'
import image1 from '../assets/ProductImages/8362c136631b99caa65777bf50ad55c2_1200x.jpg'
import image2 from '../assets/ProductImages/8362c136631b99caa65777bf50ad55c2_1200x.jpg'
import image3 from '../assets/ProductImages/A1256011_MainProdFrame_535x.jpg'
import image4 from '../assets/ProductImages/A1334H11_8_535x.jpg'
import image5 from '../assets/ProductImages/A2642J11_535x.jpg'
import image6 from '../assets/ProductImages/A2643J11_535x.jpg'
import image7 from '../assets/ProductImages/B2347121_A2347121_A26C4021_ND01_V1__original_1_1200x.jpg'
import image8 from '../assets/ProductImages/A80B5H11_1_1200x.jpg'
import image9 from '../assets/ProductImages/A80F5H61_1_f4e69321-a30b-4f99-8380-dbf99c6994d8_1200x.jpg'
import image10 from '../assets/ProductImages/A80F5H61_1_f4e69321-a30b-4f99-8380-dbf99c6994d8_4500x.jpg'
import image11 from '../assets/ProductImages/A80F5H61_2_4501x.jpg'
import { Link } from 'react-router-dom'
import ProductCart from '../Pages/ProductCart'

const NewArrivalsRight = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    const productItems = [
      { id: 1, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image1 },
      { id: 2, name: 'Anker Power Bank (20,000mAh, 22.5W, Built-In USB-C Cable)' , Price: '₱3,415.25', oldprice:'6,995.00', image:image2},
      { id: 3, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image3 },
      { id: 4, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00',image: image4 },
      { id: 5, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image5 },
      { id: 6, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image6 },
      { id: 7, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image7},
      { id: 8, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image8},
      { id: 9, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image9 },
      { id: 10, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image10 },
      { id: 11, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image11},
      { id: 12, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image11},
      { id: 13, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image6 },
      { id: 14, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image7},
      { id: 15, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'6,995.00', image:  image8},
      { id: 16, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'6,995.00', image:  image8},
    ]



  return (
    <div className='allProducts'>
            <div className='topTexts'>
                  <p>20 products</p>
                <div className='featuresect'>
                  <p>sort by</p>
                    <label For="datalist-Featured"></label>
                    <input  list="datalist-Features" 
                    id='datalist-Featured' placeholder='Featured'/>
                    <datalist id='datalist-Features'>
                        <option value='Best selling'></option>
                        <option value='Alphabetically, A-Z'></option>
                        <option value='Alphabetically, Z-A'></option>
                        <option value='Price, low to high'></option>
                        <option value='Price, high to low'></option>
                        <option value='Date, old to new'></option>
                        <option value='Date, new to old'></option>
                    </datalist>
                </div>  
            </div>
            
            {/* products list */}
            <div className='mainProducts' onClick={()=> <Link href= {<ProductCart/>}></Link> } >
              {productItems.map(item => (
                <div className='mainProductsInner'  onMouseEnter= {handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <img className='productImage' src={item.image} alt={`Img ${item.id}`} />
        
                      <h3 className='texts'>{item.name}</h3> 
                
                    <div className='price'>
                      <p className='newprice'>{item.Price} </p> 
                      <p className='oldprice'>{item.oldprice}</p> 
                    </div>
                    <div>
                  {isHovered === item.id && (
                    <div className="overlay">
                      <a href="/">Learn More</a>
                      <a href="/">Add to Cart</a>
                    </div>
                  )}
                </div>
                 </div>
                
                ))}
               
                  
            </div>
  </div>
  )
}

export default NewArrivalsRight
