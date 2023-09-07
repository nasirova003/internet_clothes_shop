import React, {useState} from 'react';
import {BsCartCheckFill, BsFillBasket3Fill, BsFillBookmarkFill, BsFillCartFill, BsFillHeartFill} from "react-icons/bs";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {addToBasket} from "../../store/Reducers/BasketSlice";
import {addToFavorite, removeFromFavorite} from "../../store/Reducers/FavoriteSlice";


const ProductCard = ({el}: any ) => {
    const [fav, setFav] = useState(true)
    const dispatch = useAppDispatch()
    const {basketItems, value} = useAppSelector(state => state.basketSlice)
    const {favoriteItems} = useAppSelector(state => state.favoriteSlice)
    const [button, setButton] = useState(false)
    const [daily, setDaily] = useState(false)
    const [isLiked, setIsLiked] = useState(false)


    const addToFav = () => {
        dispatch(addToFavorite(el))
        setIsLiked(true)
        setFav(false)
        setTimeout(() => setIsLiked(false), 1000)
    }
    const handleAddToFav = () => {
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
                    <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-500 dark:border-gray-500 w-60 h-120 shadow-blue-800  dark:bg-gray-300">
                        <div onDoubleClick={() => {
                            addToFav()
                            setFav(!fav)
                        }}className="image">
                            <img  className="rounded-t-lg w-64 h-72 p-5 " src={el.image}
                                  alt=""/>
                            <BsFillHeartFill
                                className={`relative top-[-50%] transition-[.2s] left-[45%] text-pink-600 text-xl  ${isLiked ? "scale-100" : "scale-0"}`}/>
                        </div>
                        <div className="p-2">
                            <p className=" font-bold tracking-tight dark:text-blue-50">{el.title}</p>
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
                            <button onClick={()=> {
                                handleAddToFav()
                                setFav(!fav)
                            } }
                                    className=" from-pink-600 hover:bg-gradient-to-bl}">

                                {
                                    !fav ? <BsFillHeartFill className="text-pink-600"/>
                                        : <BsFillHeartFill className="text-white"/>
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

