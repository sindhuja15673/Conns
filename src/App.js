import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Head from './Component/Header/Head1/Head';
import Contact from './Component/Footer/contact';  
import Header from './Component/Header/Head2/Header';
import Head2 from './Component/Header/Head3/Head2';
import Cart from './Component/Pages/Cart/Cart';
import Bill from './Component/Pages/Bill/Bill';
import Order from './Component/Pages/Order/Order';
import Finance from "./Component/Pages/Finance/Finance";
import Appliance from './Component/Pages/Appliance/Appliance';
import Furniture from './Component/Pages/Furniture/Furniture';

function App() {
  return (
    <Router>
      <div>
        <Head />
        <Header />
        <Head2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/order' element={<Order/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/bill" element={<Bill/>}/>
          <Route path='/finance' element={<Finance/>}/>
          <Route path='/appliance' element={<Appliance/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
         
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;

