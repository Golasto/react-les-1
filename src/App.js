import React from 'react';
import './App.css';
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Tile from "./components/Tile";
import brand from './assets/brand.png';
import story from './assets/our_story.png';


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button props={"to the collection"} enabled={true}/>
          <Button props={"shop all bags"} enabled={true}/>
          <Button props={"pre-orders"} enabled={false}/>
      </nav>
          <main>
              <Product tag={"Best seller"} imgSource={bag1} productName={"The handy bag"} productPrice={"€400"}/>
              <Product tag={"Best seller"} imgSource={bag2} productName={"The stylish bag"} productPrice={"€250"}/>
              <Product tag={"Best seller"} imgSource={bag3} productName={"The simple bag"} productPrice={"€300"}/>
              <Product tag={"Best seller"} imgSource={bag4} productName={"The trendy bag"} productPrice={"€150"}/>
          </main>
          <footer>
              <Tile text={"loremenfn"} title={"Titel"}/>
              <Tile imgSrc={brand}/>
              <Tile imgSrc={story}/>
              <Tile text={"loremenfn"} title={"Titel"} />
          </footer>

      </>
  );
}

export default App;



