import React from 'react';
import Product from './Product'
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image' 
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg' 
        alt=''
      />

      <div className='home__row'>
        <Product 
          id='001'
          title='Intel Gamer Days: 35% off select Intel gaming CPUs'
          price={319.00}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41bcJWJLZ1L._AC_US160_.jpg'
        />
        <Product 
          id='002'
          title='AmazonBasics 30W One-Port USB-C 3.0 Wall Charger for Laptops, Tablets and Phones - Black'
          price={30.59}
          rating={3}
          image='https://m.media-amazon.com/images/I/71IBbQdkvsL._AC_UL320_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product 
          id='003'
          title='AmazonBasics Gaming Headset - Black And Blue'
          price={26.70}
          rating={4}
          image='https://m.media-amazon.com/images/I/71lVo9Y3nnL._AC_UL320_.jpg'
        />
        <Product 
          id='004'
          title='Laptop Stand, Tablet Laptop Holder Stand Foldable Ventilated Adjustable Laptop Computer Holder Desk Stand Universal Lightweight Ergonomic Tray Cooling (Silver)'
          price={14.44}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61xWJtecMaL._AC_SL1200_.jpg'
        />
        <Product 
          id='005'
          title='AmazonBasics Standby UPS 800VA 450W Surge Protector Battery Backup, 12 Outlets'
          price={79.49}
          rating={4}
          image='https://m.media-amazon.com/images/I/81WQ4-hQ+HL._AC_UL320_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product 
          id='006'
          title='Amazfit Bip S Fitness Smartwatch, 40 Day Battery Life, 10 Sports Modes, Heart Rate, 1.28 Always-On Display, Water Resistant, Built-in GPS, Red Orange (W1821US4N)'
          price={55.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/41VoXi2OFML._AC_US218_.jpg'
        />
      </div>
      {/* Product id, title, price, rating, image */}
    </div>
  )
}

export default Home

// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
