import React from 'react'
import './nav.css'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="box">
          
           
                <div className="Header">
                    
                        <Link to="/home"><button className="b1">IMDb</button></Link>
                        <Link to="/menuicon">
                            <div 
                            className="icon">
                            <div className="menuicon"></div> 
                            <div className="menuicon"></div>    
                            <div className="menuicon"></div>
                            </div>
                        </Link>
                        <Link to="/menu"><div className="menu">Menu</div></Link>                        
                        <Link to="/searchmovies"><div className="search-button">SearchMovies</div></Link>
                        <Link to="/imdbpro"><div className="imdbpro">IMDbPro</div></Link>
                        <Link to="/watchlist"><div className="watchlist">WatchList</div></Link>
                        <Link to="/comingsoon"><div className="comingsoon">Coming Soon</div></Link>
                        <Link to="/signin"><div className="signin">SignIn</div></Link>
                        
                </div>

                
                
        </div>  
    )
}
