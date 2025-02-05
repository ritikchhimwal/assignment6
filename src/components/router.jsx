import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './home';
import PostDetail from './postDetail';
import NavBar from './navBar';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar /><hr></hr>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<PostDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
