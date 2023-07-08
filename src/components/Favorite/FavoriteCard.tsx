import React, {useState} from 'react';
import {IProduct} from "../../types/interface";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {AiOutlineDelete, AiOutlineHeart} from "react-icons/ai";
import {removeFromFavorite} from "../../store/Reducers/FavoriteSlice";
import {removeFromAdmin} from "../../store/Reducers/BasketSlice";



const ProductCard = ({el}:any) => {
    const dispatch = useAppDispatch()
    console.log('favorite', el)
    const {favoriteItems,value} = useAppSelector(state => state.favoriteSlice)
    const [button, setButton] = useState(false)
    const {mode} = useAppSelector(state => state.darkModeSlice)

    const btn = () => {
        setButton(!button)
    }


    return (

        <div>
            {
                el.title.includes(value) &&
                <div className="flex flex-wrap p-5 justify-between" >
                    <div
                        className="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-500 dark:border-gray-500 w-60 h-120 shadow-blue-800  dark:bg-gray-300">
                        <div className="">
                            <img className="rounded-t-lg w-64 h-72 p-5 " src={el.image} alt=""/>
                        </div>
                        <div className="p-5">
                            <p className=" text-lg font-bold tracking-tight dark:text-blue-50 ">{el.title}</p>
                        </div>
                        <div className="flex justify-around p-5 bg-gray-800 rounded-b-lg">

                            {
                                <div className="flex justify-around">
                                    <div>
                                        <h1 className="py-1 p-5 text-lg font-bold tracking-tight dark:text-blue-50 ">{el.price} $</h1>
                                    </div>
                                    <button onClick={()=>dispatch(removeFromFavorite(el))}
                                            className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-100  dark:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">remove
                                        <svg aria-hidden="true" className="w-7 h-6 ml-3 -mr-3 " fill="currentColor "
                                             viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                            <AiOutlineDelete/>
                                        </svg>
                                    </button>
                                </div>                            }
                        </div>
                    </div>
                </div>

            }

        </div>


    );
};

export default ProductCard;