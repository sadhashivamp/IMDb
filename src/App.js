import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";    //imported router
import {Navbar} from './Components/Navbar/Navbar'
import SocialFollow from './Components/Footer/SocialFollow' //imported all child components 
import IMDb from './Components/Home/IMDb'
import SearchMovies from './Components/SearchBar/SearchMovies';

import ImdbPro from './Components/Home/ImdbPro';
import WatchList from './Components/WatchList/WatchList';
import ComingSoon from './Components/ComingSoon/Coming Soon';
import Signin from "./Components/SignIn/SignIn";

const App = () => { //functional component of App
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                {/* using the Router we can render the IMDB,SearchMovies,ImdbPro,WatchList,ComingSoon, 
                And SignIn with resp to path selection*/}
                    <Route exact path="/home" component={ IMDb } />
                    <Route exact path="/searchmovies" component={ SearchMovies } />
                    
                    <Route exact path="/imdbpro" component={ ImdbPro } />
                    <Route exact path="/Watchlist" component={ WatchList } />
                    <Route exact path="/ComingSoon" component={ ComingSoon } />
                    <Route exact path="/signin" component={Signin} />
                <SocialFollow />
           </BrowserRouter>
           
        </div>
    )
}
export default App