import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import FavoriteCard from "./FavoriteCard";
import {clearFavorite} from "../../store/Reducers/FavoriteSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";


const Favorite = ({el}:any) => {
    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(state => state.darkModeSlice)

    const {favoriteItems} = useAppSelector(state => state.favoriteSlice)
    return (
        <div style={{background:mode ? "gray": ""}}>

            {
               favoriteItems.length === 0 ? (
                    <div className=" p-44">
                        <h1 style={{color: mode ? "white" : "black"}}className="text-white text-2xl p-5">Favorite page is empty!</h1>
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
                        <div className="flex justify-around p-5" >
                            <h1 className="text-2xl " style={{
                                color:mode ? "white": "black",height:"100 vh"
                            }}>Здесь лучшие товары, которые вы выбираете в нашем интернет-магазине!</h1>
                            <button  onClick={() => dispatch(clearFavorite(el))}  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >CLEAR ALL</button>

                        </div>

                        <div className="flex flex-wrap p-14">
                            {
                                favoriteItems.map(el=> (
                                    <FavoriteCard el={el} />
                                ))
                            }


                        </div>
                    </div>
                )
            }

        </div>

    );
};

export default Favorite;