import React from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Slides";
import "./SlideView.css";

const breakPoints = [
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
    
  ];

const SlideView = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="Slide__view">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://booklistqueen.com/wp-content/uploads/new-york-times-fiction-best-sellers-feature.jpg" style="width:100%" alt="first" /></Item>
          <Item><img src="https://www.booklistqueen.com/wp-content/uploads/new-york-times-nonfiction-best-sellers-feature.jpg" alt="second"/></Item>
          <Item><img src="https://www.vowelor.com/wp-content/uploads/2019/07/Best-True-Crime-Books-696x380.png" alt="third"/></Item>
          <Item><img src="https://www.frontlist.in/storage/uploads/2021/05/Capture-43.png" alt="fourth"/></Item>
          
        </Carousel>
      </div>
    </div>
  )
}

export default SlideView