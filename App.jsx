import React from 'react'

import Navbar from './components/navbar/navbar'
import Cart from './components/cart/cart'
import "./App.css"
import Usercart from './components/usercart/usercart'
import Activ from './components/activ/activ'

import Img from "./assets/navbar-brand.png"
import Imgcart from "./assets/fixed-width.png"
import Imglinya from "./assets/fixed-width fixed-height.png"
import Imgcart2 from "./assets/fixed-width (1).png"
import Imgcart3 from "./assets/fixed-width (2).png"
import ImgSec2 from "./assets/col-md-6.png"
import Imglinya1 from "./assets/fixed-width fixed-height1.png"
import ImgIcone from "./assets/icon arrow-next.png"
import ImgUsercart from "./assets/fixed-height.png"
import ImgPrese from "./assets/Frame 4.png"
import ImgSales from "./assets/sales.png"
import Imgprices from "./assets/prices.png"
import ImgFarme from "./assets/Frame 1.png"
import Imgstars from "./assets/stars.png"
import ImgDiv from "./assets/div.png"
import Footer from './components/footer/footer'
import silka from './assets/social media.png'

const App = () => {
  return (
    <div>
      <div className="nav">
        <Navbar img={Img} />
        <div className="section1">
          <p style={{ color: "#23A6F0" }}>Join Us</p>
          <p className='textCoureses'>COURSES OF <br /> EXCELLENT <br /> QUALITY</p>
          <p className='textWe'>We know how large objects will act, but things on a  <br />
            small scale just do not act that way.</p>
          <button className='btn' style={{ color: "white" }}>Join Us</button>
        </div>
      </div>
      <div className="boxcart">
        <Cart img={Imgcart} linya={Imglinya} text="The best chose in your life" text2="2,769 online courses" color="gray" />
        <Cart img={Imgcart2} linya={Imglinya} text="The  best  quality for our courses" text2="Certified Teacher" color="gray" />
        <Cart img={Imgcart3} linya={Imglinya} text="The best chose in your life" text2="2,769 online courses" bg="#23A6F0" color="white" colorText="white" />
      </div>
      <div className="section2">
        <img src={ImgSec2} className='ImgSec2' alt="" />
        <div className="continir">
          <img src={Imglinya1} alt="" />
          <p className='textFeatured'>23 Products</p>
          <p style={{ color: "gray" }}>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics </p>
          <div className="textImg">
            <p style={{ color: "#23A6F0" }}>Learn More</p>
            <img src={ImgIcone} alt="" />
          </div>
        </div>
      </div>
      <div className="boxtext">
        <p style={{ color: "#23A6F0" }}>Practice Advice</p>
        <p className='textWathc'>Watch our Courses</p>
        <p style={{ color: "gray" }}>Problems trying to resolve the conflict between  <br />
          the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="boxCart">
        <Usercart img={ImgUsercart} english="English Departement" imgPrese={ImgPrese} Frontend="Frontend developer" textgray="Tehe best frontent developer that can solve your problem in web part" imgsale={ImgSales} Imgprices={Imgprices} imgFarme={ImgFarme} imgIcone={ImgIcone} />
        <Usercart img={ImgUsercart} english="English Departement" imgPrese={ImgPrese} Frontend="Frontend developer" textgray="Tehe best frontent developer that can solve your problem in web part" imgsale={ImgSales} Imgprices={Imgprices} imgFarme={ImgFarme} imgIcone={ImgIcone} />
        <Usercart img={ImgUsercart} english="English Departement" imgPrese={ImgPrese} Frontend="Frontend developer" textgray="Tehe best frontent developer that can solve your problem in web part" imgsale={ImgSales} Imgprices={Imgprices} imgFarme={ImgFarme} imgIcone={ImgIcone} />
      </div>
      <div className="boxtext">
        <p style={{ color: "#23A6F0" }}>Practice Advice</p>
        <p className='textWathc'>Each and every client is important.</p>
        <p style={{ color: "gray" }}>Problems trying to resolve the conflict between  <br />
          the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="boxActiv">
        <Activ img={Imgstars} text="Slate helps you see 
how many more days  
you need to work to 
reach your financial 
goal for the month 
and year." imgDiv={ImgDiv} />
        <Activ img={Imgstars} text="Slate helps you see 
how many more days  
you need to work to 
reach your financial 
goal for the month 
and year." imgDiv={ImgDiv} />
        <Activ img={Imgstars} text="Slate helps you see 
how many more days  
you need to work to 
reach your financial 
goal for the month 
and year." imgDiv={ImgDiv} />
      </div>
      <div className="section7">
        <p style={{ color: "#23A6F0" }}>Practice Advice</p>
        <p className='textJoin'>JOIN US</p>
        <p style={{ color: "gray" }}>Problems trying to resolve the conflict between  <br />
          the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="searchAll">
        <input type="text" placeholder='Your Email' style={{ color: "gray" }} className='search' />
        <button className='btnSub'>Subscribe</button>
      </div>
      <div className="footer">
      <Footer text="Get In Touch" gray="the quick fox jumps over the lazy dog" img={silka} />
      <Footer text="Company info" gray="About Us" text2="Carrier" text3="We are hiring" text4="Blog" />
      <Footer text="Features" gray="Business Marketing" text2="User Analytic" text3="Live Chat" text4="Unlimited Support" />
      <Footer text="Resources" gray="IOS & Android" text2="Watch a Demo" text3="Customerst" text4="API" />
      </div>
      <p className='p'>Made With Love By Figmaland All Right Reserved </p>
    </div>
  )
}

export default App