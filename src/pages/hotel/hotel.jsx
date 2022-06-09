import React, { useState } from 'react';
import './hotel.css'
import { faLocationDot,faAngleLeft,faAngleRight,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../../components/header/header';
import NavBar from '../../components/navbar/navbar';
import MailList from '../../components/mailList/mailList';
import Footer from '../../components/footer/footer';

const Hotel = () => {
    const [slideNumber,setSlideNumber] = useState(0);
    const [open,setOpen] = useState(false);
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }
    const photos = [
        {src:"https://cf.bstatic.com/xdata/images/hotel/max300/128375343.jpg?k=12851cf05d758989338263a9b40082337d60ab877aac6c8da63531c2aba31e99&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max500/123239471.jpg?k=1036c72da9434df241346a0a62f8c17de4d981c8046c947e5ba7e23e638b6fa8&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max500/232768334.jpg?k=b54b1818def5a246d61fb823307389add70c17440e0cde80187df5cd1729a36d&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max500/232768334.jpg?k=b54b1818def5a246d61fb823307389add70c17440e0cde80187df5cd1729a36d&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/123239766.jpg?k=29ac23df1bee30a9815cb6e23aea55641a7ec9e24ebdfd8320c29511975f0df1&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/landmark/max1024/249651.webp?k=e64a609bce304f9512b6211c67f08ed8e19f932cccc6055c959cfce9266a67ad&o="},
    ];
    const handleMove = (direction) => {
        console.log('size',photos.length);
        let newSlideNumber;
        if(direction==='l'){
            newSlideNumber = slideNumber === 0 ? photos.length-1 : slideNumber-1;
        }else{
            newSlideNumber = slideNumber === photos.length-1 ? 0 : slideNumber+1;
        }
        setSlideNumber(newSlideNumber);
    }
    return (
        <div>
            <NavBar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider"> 
                    <FontAwesomeIcon onClick={()=>setOpen(false)} className="slideClose" icon={faCircleXmark} />
                    <FontAwesomeIcon icon={faAngleLeft} className="slideLeft" onClick={()=>handleMove('l')} />  
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                    </div>                          
                    <FontAwesomeIcon icon={faAngleRight} className="slideRight" onClick={()=>handleMove('r')} />   
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} className="haIcon" />
                        <span>7-9 Rue Saint-Vincent, 18th arr., 75018 Paris, France</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent localtion - 500m from center
                    </span>
                    <span className="hotelPriceHightlight">
                        Book a stay over $114 at this property and get a free Airport taxi
                    </span>
                    <div className="hotelImgs">
                        {photos.map((photo,i)=>(
                            <div key={i} className="hotelImageWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelDetailTitle">Odalys City Paris Montmartre</h1>
                            <p className="hotelDescription">
                            Located 200 m from the Sacré-Coeur in Paris, Odalys City Paris Montmartre offers studios and apartments a 15-minute walk from Moulin Rouge. Guests may have a relaxing time in the wellness area at an extra cost.
                            <br/>
                            Each studio is equipped with a flat-screen TV, an equipped kitchenette and a dining area. Every unit is fitted with a private bathroom with a bath and a hairdryer. Bed linen is provided.
                            <br/>
                            Buffet breakfast can be enjoyed in the breakfast room.
                            <br/>
                            Anvers Metro Station is a 12-minute walk from Odalys City Paris Montmartre, while Lamarck - Caulaincourt Metro Station is a 5-minute walk away. Opéra Garnier and the Louver can both be accessed within 35 minutes by public transport and Les Docks de Paris Event Venue is 2.1 mi away.
                            <br/>
                            This is our guests' favorite part of Paris, according to independent reviews.
                            <br/>
                            Couples in particular like the location – they rated it 9.3 for a two-person trip.
                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                            Located in the top-rated area in Paris, this property has an excellent location score of 9.2!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel;