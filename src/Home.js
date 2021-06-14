import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg" alt=""/>

            <div className="home_row">
            <Product id="1" title="Amazon Brand - Solimo Musca Three Seater Fabric Recliner (Chocolate)" price={32999.00} rating={4} image="https://m.media-amazon.com/images/I/81HXlhGi3uL._AC_UL480_FMwebp_QL65_.jpg" />
            <Product id="8" title="Royaloak Divine Single Seater Rocking Recliner (Brown)." price={19999.00} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/71GMqrZmX9L._SL1080_.jpg" />
            </div>
            <div className="home_row">
            <Product id="2" title="Apple iPhone Xs Max (64GB) - Space Grey" price={68900.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51ZdmjN52-L._SL1000_.jpg" />
            <Product id="3" title="Apple iPhone 11 Pro Max (64GB) - Midnight Green" price={117100.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SX679_.jpg" />
            <Product id="4" title="Apple iPad Air (10.5-inch, Wi-Fi, 256GB) - Silver" price={45900} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/51MHU-Scf3L._SY741_.jpg" />
            </div>
            <div className="home_row">
            <Product id="5" title="
Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Blue)" price={9876.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61MVJyOfuBL._SL1000_.jpg" />
            <Product id="6" title="
Introducing Echo Show 8 – Smart display with Alexa - 8' HD screen with stereo sound – Black" price={9999.00} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/61X312UcToL._SL1000_.jpg" />
            </div>
            <div className="home_row">
            <Product id="7" title="
Samsung 138 cm (55 inches) 4K Ultra HD Smart QLED TV QA55Q7F (2017 Model)" price={209999.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81dMBoQVxwL._SL1500_.jpg" />
            </div>
            
        </div>
    )
}

export default Home
