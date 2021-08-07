import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //imported fontAwesome icon
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";  //imported fontAwesome of socialMedia websites
import './styles.css'

 function SocialFollow() {
  return (
    <div class="social-container">
      <center><h3>Social Follow</h3></center>
      <center >
         <a href="https://www.youtube.com/imdb" //this is the youTube website of IMDb
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            
         <a href="https://www.facebook.com/imdb"   //this is the Facebook website of IMDb
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
         <a href="https://twitter.com/imdb"  //this is the twitter website of IMDb
            className="twitter social"> 
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
         <a href="https://www.instagram.com/imdb/" //this is the instagram website of IMDb
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </center>
    </div>
  );
}
export default SocialFollow