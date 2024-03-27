
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Shop from "./Pages/Shop";
// import ShopCategory from './Pages/ShopCategory';
// import Product from './Pages/Product';
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop'
import LoginSignup from './Pages/LoginSignup';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kid from './Pages/Kid';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div >
      {/* <BrowserRouter>  */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
        <Route path='/men' element={<Men banner={men_banner}/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/kid' element={<Kid/>}></Route>
      </Routes>
      {/* <Footer/> */}
      {/* </BrowserRouter>  */}


      {/* <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=':productId' element={<Product/>}  />
        <Route path='/ Cart' element={<Cart/>}/>
        <Route path='/ login' element={<LoginSignup/>} /> 
      </Routes> */}
    </div>
  );
}

export default App;
