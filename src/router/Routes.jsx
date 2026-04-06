import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import Skillset from '../pages/Skillset';
import Skillset2 from '../pages/Skillset2';
import Skillset3 from '../pages/Skillset3';
import Skillset4 from '../pages/Skillset4';
import Skillset5 from '../pages/Skillset5';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/mimas-tek/" element={<Home />} />
            {/* <Route path="/life-strategy/login" element={<Login />} /> */}
            <Route path="/mimas-tek/about" element={<About />} />
            <Route path="/mimas-tek/skillset" element={<Skillset5 />} />
        </Routes>
    );
};

export default AppRoutes;