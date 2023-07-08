import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import BasketCard from "./BasketCard";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {clearBasket} from "../../store/Reducers/BasketSlice";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";


const Basket = ({el}: any) => {
    const dispatch = useAppDispatch()
    const {basketItems} = useAppSelector(state => state.basketSlice)
    const {mode} = useAppSelector(state => state.darkModeSlice)
    return (
        <div>
            <div style={{background: mode ? "gray" : "white"}}>

                <hr/>
                {
                    basketItems.length === 0 ? (
                        <div className=" p-44">
                            <h1 style={{color: mode ? "white" : "black"}}className="text-white text-2xl p-5">Basket page is empty!</h1>
                            <div>
                                <Link to="/product">
                                    <button
                                            className="ml-96 m-1 p-5 flex justify-around  py-2  mb-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><AiOutlineArrowLeft className="text-xl"/> Start shopping
                                    </button>

                                </Link>
                            </div>

                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-evenly bg-gray-800 text-blue-50" style={{
                                background: mode ? "" : "gray"
                            }}>
                                <h1 className="text-L p-5">PRODUCT</h1>
                                <h1 className="text-lg p-5">NAME</h1>
                                <h1 className="text-lg p-5">ABOUT</h1>
                                <h1 className="text-lg p-5">TOTAL PRICE (0)</h1>
                                <button className="m-3 w-28 text-lg text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 px-px" onClick={() => dispatch(clearBasket(el))}>CLEAR ALL</button>
                            </div>
                            {
                                basketItems.map(el => (
                                    <BasketCard el={el}/>
                                ))
                            }
                        </div>
                    )
                }



            </div>
        </div>

    );
};

export default Basket;