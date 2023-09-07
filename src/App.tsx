import React from 'react';
import './App.css';
import Product from "./components/ProductCard/Product";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Admin from "./components/Admin/Admin";
import Modal from "./components/ModalPage/modal";
import {useAppSelector} from "./hooks/useAppSelector";
import OrderModalPage from "./components/OrderModalPage/orderModalPage";

function App() {
    const {isOpen} = useAppSelector(state => state.modalSlice)
    const {isOpenOrder} = useAppSelector(state => state.orderSlice)
    return (
        <div className="App">
            <Header/>
            {isOpen && <Modal/>}
            {isOpenOrder && <OrderModalPage/>}
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/product"} element={<Product/>}/>
                <Route path={"/favorite"} element={<Favorite/>}/>
                <Route path={"/basket"} element={<Basket/>}/>
                <Route path={"/admin"} element={<Admin/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
