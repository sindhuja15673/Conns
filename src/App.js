
import React from 'react';
import { Provider } from 'react-redux';
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
import Tv from "./Component/Pages/TV/Tv";
import Bedding from './Component/Pages/Bedding/Bedding';
import Computer from "./Component/Pages/Computer/Computer";
import Outdoor from "./Component/Pages/Outdoor/Outdoor";
import Sale from "./Component/Pages/Sale/Sale";
import Television from "./Component/Pages/Telivision/Telivision";
import Sofa from "./Component/Pages/sofa/Sofa";
import Laptop from './Component/Pages/Computer/Laptop/Laptop';
import Matress2 from './Component/Pages/Bedding/Matress2/Matress2';
import Patio from './Component/Pages/Outdoor/Patio/Patio';
import Appliances1 from './Component/Pages/Appliance/Appliances1/Appliances1';
import SignIn from './Component/Pages/sign/SignIn';
// import { CartProvider } from './Contexts/CartContext';
import store from './saga/store';

function App() {
  return (
    <Provider store={store}>
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
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/computer' element={<Computer/>}/>
            <Route path='/bedding' element={<Bedding/>}/>
            <Route path='/outdoor' element={<Outdoor/>}/>
            <Route path='/sale' element={<Sale/>}/>
            <Route path='/television' element={<Television/>}/>
            <Route path='/sofa' element={<Sofa/>}/>
            <Route path='/laptop' element={<Laptop/>}/>
            <Route path='/matress2' element={<Matress2/>}/>
            <Route path='/patio' element={<Patio/>}/>
            <Route path='/appliances1' element={<Appliances1/>}/>
            <Route path='/signin' element={<SignIn/>}/>
          </Routes>
          <Contact />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
