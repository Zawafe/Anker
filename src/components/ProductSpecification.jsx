import React from 'react'
import '../Styles/ProductSpecification.css'
import Description from './Description'

const ProductSpecification = () => {

  return (
    <div className='pagesBody'>
     <div className='pages'>
      <nav className=''>
        <a href='#descriptionContent'>DESCRIPTION</a>
        <a href={<Description/>}>SPECIFICATION</a>
        <a href="">COMPATIBILITY</a>
        <a href="">NOTES</a>
      </nav>

        <div id='descriptionContent'>
           <ul>
                <li><p><span>Fast Charging Made Easy:</span> Get high-speed charging with the built-in 22.5W USB-C cable for all your devices and enjoy the convenience of charging your phone 3 to 4 times.</p></li>
           </ul>
           <ul>
                <li><p><span>Easy to Carry, Easier to Charge:</span>  Featuring a built-in strap, this power bank ensures portability and convenient charging wherever you are.</p></li>
           </ul>
           <ul>
                <li><p><span>Power in Your Pocket:</span> Discover the power of a 20,000mAh battery in a slim 4.5 × 2.8 × 1.2-inch design, fueling phones and tablets for days.</p></li>
           </ul>
           <ul>
                <li><p><span>Universal Compatibility:</span>  Charge a wide range of phones, smartphones, tablets, and more with remarkable efficiency.</p></li>

           </ul>
           <ul>
                <li><p><span>What You Get:</span> Anker Power Bank (20,000mAh, 22.5W, Built-In USB-C Cable), welcome guide, our worry-free 18-month warranty, and friendly customer service. (Note: The built-in cable supports both charging and recharging; additional cables are not included.)</p></li>
                
           </ul>

        </div>


    </div>
    </div>

  )
}

export default ProductSpecification
