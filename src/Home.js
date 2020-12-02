import React from "react";
import "./Home.css";
import Product from "./Product";
import LeanStartup from "./assets/leanStartupBook.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Nov/1500x600_Hero-Tall_np._CB416108473_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="5344"
            title="The Lean Startup"
            price={29.99}
            image={LeanStartup}
            rating={5}
          />

          <Product
            id="53354"
            title="Chair"
            rating={4}
            image="https://m.media-amazon.com/images/I/41HQywWoD-L._AA210_.jpg"
            price={10.28}
          />
        </div>
        <div className="home__row">
          <Product
            id="5324"
            image="https://m.media-amazon.com/images/I/5114a8X6iHL._AA210_.jpg"
            title="Casio Watch"
            rating={5}
            price={100.0}
          />
          <Product
            id="58543"
            title="HP 14s-cf3074TU"
            image="https://m.media-amazon.com/images/I/81MEmcBaxVL._AC_UY218_.jpg"
            rating={4}
            price={70.0}
          />
          <Product
            id="53864"
            title="AVITA Essential NE14A2INC433-CR 14-inch Laptop"
            image="https://m.media-amazon.com/images/I/61PXjYVtmqL._AC_UY218_.jpg"
            rating={2}
            price={150.0}
          />
        </div>
        <div className="home__row">
          <Product
            id="55844"
            image="https://m.media-amazon.com/images/I/71GvMl9GSzL._AC_UY218_.jpg"
            title="Nvidia RTX 3070"
            rating={5}
            price={160.0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
