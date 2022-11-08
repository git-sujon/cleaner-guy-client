import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Header/Header';
import MainFooter from '../Pages/MainFooter/MainFooter';





const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet  ></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Main;