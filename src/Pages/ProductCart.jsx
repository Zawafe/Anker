import React from 'react'
import '../Styles/ProductCart.css'
import ProductAddToCart from '../components/ProductDescription';
import ProductDescription from '../components/ProductDescription';
import ProductSpecification from '../components/ProductSpecification';
import CustomerReview from '../components/CustomerReview';
import Footer from '../Footer';

// import image1 from '../Assets/ProductImages/201_1200x.png'
// import image2 from '../Assets/ProductImages/8362c136631b99caa65777bf50ad55c2_1200x.jpg'
// import image3 from '../Assets/ProductImages/A1256011_MainProdFrame_535x.jpg'
// import image4 from '../Assets/ProductImages/A1334H11_8_535x.jpg'
// import image5 from '../Assets/ProductImages/A2642J11_535x.jpg'
// import image6 from '../Assets/ProductImages/A2643J11_535x.jpg'
// import image7 from '../Assets/ProductImages/B2347121_A2347121_A26C4021_ND01_V1__original_1_1200x.jpg'
// import image8 from '../Assets/ProductImages/A80B5H11_1_1200x.jpg'
// import image9 from '../Assets/ProductImages/A80F5H61_1_f4e69321-a30b-4f99-8380-dbf99c6994d8_1200x.jpg'
// import image10 from '../Assets/ProductImages/A80F5H61_1_f4e69321-a30b-4f99-8380-dbf99c6994d8_4500x.jpg'
// import image11 from '../Assets/ProductImages/A80F5H61_2_4501x.jpg'


const ProductCart = () => {

//  const productItems = [
//     { id: 1, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image1 },
//     { id: 2, name: 'Anker Power Bank (20,000mAh, 22.5W, Built-In USB-C Cable)' , Price: '₱3,415.25', oldprice:'6,995.00', image:image2},
//     { id: 3, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image3 },
//     { id: 4, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00',image: image4 },
//     { id: 5, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image5 },
//     { id: 6, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image6 },
//     { id: 7, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image7},
//     { id: 8, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image8},
//     { id: 9, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image9 },
//     { id: 10, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image10 },
//     { id: 11, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image11},
//     { id: 12, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image11},
//     { id: 13, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image: image6 },
//     { id: 14, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image7},
//     { id: 15, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image8},
//     { id: 16, name: 'Anker Prime 12,000mAh Power Bank (130W)' , Price: '₱6,645.25', oldprice:'₱6,995.00', image:  image8},
//   ];
  return (
    <div className='mainbody'>
      <div className='productPageBody'>
        <div className='homeTopLink'>
           {/* { productItems.map ( item =>( */}
                <div>
                    <p><a href="/">Home</a>  </p>
                    {/* <p>{item.names}</p> */}
            
                    
                </div>
                <ProductDescription/>
                <ProductSpecification/>
                <CustomerReview/>
                
            {/* ))}       */}
        </div>
    </div>
    </div>
  )
}

export default ProductCart;
