import {BrowserRouter as  Router, Routes,Route }from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Page from  './Page.jsx'
import Content from './Content.jsx'
import Last from './Last.jsx'
import NewArrivals from './Pages/NewArrivals.jsx'
import ProductCart from './Pages/ProductCart.jsx'



function App() {
  
  return(
    <>
     <Router>
      <Routes>
         <Route path='/ProductCart' element={ <ProductCart/> }/> 
        <Route path='/NewArrivals' element={ <NewArrivals/> }/> 
        <Route path='/ontent' element={ <Content/> }/> 
        <Route path='/pic4' element={<Header/>}/>
        <Route path='/pic' element={ <Page/> }/>
        <Route path='/pci' element={<Last/>}/>
       
      </Routes>
      <Footer/>
     </Router>

     
    </>
    
    
  )
}

export default App
