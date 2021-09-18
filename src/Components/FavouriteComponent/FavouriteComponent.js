import React from "react";
import Carousel from "react-bootstrap/Carousel";
import AdeleCover from '../../Assets/Adele.jpg';
import be from '../../Assets/believer.jpg';
import DrakeImage from "../../Assets/drake.jpg";
import  "./FavouriteComponent.css" ;


function FavouriteComponent() {
    
  return (

        <img
          className="CoverImagess"
          src={AdeleCover}

        />

      
  );
}

export default FavouriteComponent;
