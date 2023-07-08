import React, {useState} from 'react';
import {IProduct} from "../../types/interface";
import {BsCartCheckFill, BsFillBasket3Fill, BsFillBookmarkFill, BsFillCartFill, BsFillHeartFill} from "react-icons/bs";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {addToBasket} from "../../store/Reducers/BasketSlice";
import {addToFavorite} from "../../store/Reducers/FavoriteSlice";
import {MdOutlineDone} from "react-icons/md";
import {FiBookmark} from "react-icons/fi";


interface IProps {
    el: IProduct
}

const ProductCard = ({el}: IProps) => {
    const [fav, setFav] = useState(true)
    const dispatch = useAppDispatch()
    const {basketItems, value} = useAppSelector(state => state.basketSlice)
    const [button, setButton] = useState(false)
    const [daily, setDaily] = useState(false)
    const doubleClick = () => {
        setDaily(true)
        setTimeout(() => {
            setDaily(false)
        }, 1000)
    }
    const addToFav = () => {
        dispatch(addToFavorite(el))
    }
    const addToCart = () => {
        dispatch(addToBasket(el))
    }


    return (
        <div>
            {
                el.title.includes(value) &&
                <div className="flex flex-wrap p-14 ">
                    <div
                        className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-500 dark:border-gray-500 w-60 h-120 shadow-blue-800  dark:bg-gray-300">
                        <div>
                            <img onClick={() => {
                                doubleClick()
                            }} className="rounded-t-lg w-64 h-72 p-5 " src={el.image} alt=""/>

                        </div>
                        <div className="p-5">
                            <p className=" text-lg font-bold tracking-tight dark:text-blue-50">{el.title}</p>
                        </div>
                        <div className="flex justify-around p-5 bg-gray-800 rounded-b-lg">

                            {button ?
                                <NavLink to={"/basket"}>
                                    <button
                                        className="flex px-3 py-1 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-700 bg-gray-700 focus:ring-4 focus:outline-none dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                        <svg aria-hidden="true" className="w-7 h-6 ml-3 -mr-3" fill="currentColor"
                                             viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                            <BsCartCheckFill/>
                                        </svg>
                                    </button>
                                </NavLink>

                                : <button onClick={() => {
                                    addToCart()
                                    setButton(!button)
                                }}
                                          className="py-1 px-5 mr-2 flex justify-evenly text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    Add
                                    <svg aria-hidden="true" className="w-7 h-6 ml-3 -mr-3 " fill="currentColor "
                                         viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                        <BsFillCartFill/>

                                    </svg>
                                </button>}
                            <button
                                onClick={() => {
                                    addToFav()
                                    setFav(!fav)
                                }}
                                className="text-blue-50 w-8 h-8 ml-1 -mr-3 text-xl bg-gray-800 rounded-b-lg ">
                                {
                                    fav ? <BsFillBookmarkFill className="text-white"/>
                                        : <BsFillBookmarkFill    className="text-pink-600"/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default ProductCard;