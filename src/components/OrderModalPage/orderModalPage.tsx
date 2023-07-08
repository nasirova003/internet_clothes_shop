import React, {useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {closeOrder} from "../../store/Reducers/OrderSlice";
import {TiDeleteOutline} from "react-icons/ti";
import {toggleDarkMode} from "../../store/Reducers/DarkModeSlice";

const OrderModalPage = ({el}:any) => {
    const {isOpenOrder} = useAppSelector(state => state.orderSlice)
    const dispatch = useAppDispatch()
   const {mode} = useAppSelector(state => state.darkModeSlice)
      const [sendes,setSends] =useState(true)

     const sends = ()=> {

          dispatch(toggleDarkMode(el))
     }
       const  aunt = ()=> {
            setSends(!sendes)
       }

    return (
        <div className="container">
            <div  className="orderModal">
               <button className="closeOrder text-2xl text-white" onClick={()=>dispatch(closeOrder(el))}><TiDeleteOutline/></button>
                <h1 className="orderDone" style={{display: sendes ? 'none':'block',marginTop:'20px' }}>Спасибо за ваш отзыв!
                    Если хотите заказать продукт напишите на наши контакты указанной ниже.</h1>

                <div style={{display: sendes ? 'block' : 'none'}} className="ordering" >
                        <div  className="orderBlock" >
                            <div className="adminBlock">
                                <div className="adminInput">
                                    <input type="" id="default-search"
                                           className="block w-72 p-8  pl-10 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Ваш отзыв . . ."/>
                                </div>
                            </div>
                            <button onClick={()=> `${aunt()}`}
                                    className=" m-1 p-3 ml-96 py-1  mb-1  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Отправить
                            </button>
                        </div>

                    </div>



            </div>

        </div>
    );
};

export default OrderModalPage;