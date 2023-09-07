import React, {} from 'react';
import {Link} from "react-router-dom";
import {BsFillCartFill, BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {HiSearch} from "react-icons/hi";
import {toggleDarkMode} from "../../store/Reducers/DarkModeSlice";
import {openModal} from "../../store/Reducers/ModalSlice";
import {search} from "../../store/Reducers/BasketSlice";

const Header = ({el}:any) => {
    const {favoriteItems,} = useAppSelector(state => state.favoriteSlice)
    const {basketItems} = useAppSelector(state => state.basketSlice)
    const {mode} = useAppSelector(state => state.darkModeSlice)
    const {isOpen}=useAppSelector(state => state.modalSlice)
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(search(e.target.value))
    }

    return (

        <div id="header">
            <div className=" header-card p-5 bg-gray-800 h-32 " style={{
                background: mode ? "" : "grey"
            }}>
                <div className="header text-xl flex justify-around text-blue-50">
                    <Link className="text-2xl" to={"/"}> FASHION</Link>
                    <Link to={"/admin"}>Add Product</Link>
                    <Link to={"/product"}>Product </Link>

                    <button className="modal" onClick={()=>
                        dispatch(openModal(el))
                    }>About us</button>

                    <Link to={"/favorite"}>Favorite ({favoriteItems.length}) </Link>
                    <div className="flex justify-between">
                        <Link to={"/basket"} className="text-2xl"><BsFillCartFill/></Link>
                        <span> ({basketItems.length})</span>
                    </div>
                    <button className="text-2xl">
                        <button onClick={(e:any)=>  dispatch(toggleDarkMode(e)) }> <BsFillMoonFill style={{color:mode ? 'yellow': 'blue'}} /></button>

                    </button>

                </div>
                {
                    < div >
                    < input onChange={handleChange}    className="in w-96 p-4 left-10 pl-10 border-l-blue-100 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Add product image..."/>
                    <button className="btn text-2xl text-white"><HiSearch/></button>
                    </div>

                }

            </div>
        </div>

    );
};

export default Header;