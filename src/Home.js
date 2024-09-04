import './App.css';

import Baner from './Component/Baner/Baner';
import Product from './Component/Product/Product';
import Category from './Component/Category/Category';
import Sellers from './Component/Sellers/Sellers';
import Offers from './Component/Offers/Offers';
import Shop from './Component/Shop/Shop';
import Saving from './Component/Saving/saving';
import Staycation from './Component/Staycation/Staycation';
import Mattress from './Component/Matteress/Mattress';
import Brand from './Component/Brand/Brand';


function Home(){

    return (
      <>
            <Baner />
            <Product />
            <Category />
            <Sellers />
            <Offers />
            <Shop />
            <Saving />
            <Staycation />
            <Mattress />
            <Brand />
          </>
        
    );
}

export default Home;
