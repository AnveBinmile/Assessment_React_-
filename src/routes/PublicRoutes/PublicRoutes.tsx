import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import Trending from '../../pages/Trending/Trending';
import Favourite from '../../pages/Favourite/Favourite';
import ComingSoon from '../../pages/ComingSoon/ComingSoon';


const PublicRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/"  element = {<HomeScreen/>} />
        <Route path="trending" element={<Trending/>}/>
        <Route path="favourite" element={<Favourite/>}/>
        <Route path="comingsoon" element={<ComingSoon/>}/>
	</Routes>
    </div>
  )
}

export default PublicRoutes