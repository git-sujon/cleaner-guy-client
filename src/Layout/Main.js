import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header'
import MainFooter from '../Pages/Shared/MainFooter/MainFooter';





const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet  ></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Main;