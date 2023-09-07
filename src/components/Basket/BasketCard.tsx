import React, {} from 'react';
import {AiOutlineCloseCircle, AiOutlineDelete} from "react-icons/ai";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {decrease, increase, removeFromBasket} from "../../store/Reducers/BasketSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {openOrder} from "../../store/Reducers/OrderSlice";


const BasketCard = ({el}: any) => {
    const {basketItems} = useAppSelector(state => state.basketSlice)
    const {isOpenOrder} = useAppSelector(state => state.orderSlice)
    const dispatch = useAppDispatch()
    console.log('basket', el)

    const plus = (el: any) => {
        dispatch(increase(el))
    }
    const minus = (el: any) => {
        dispatch(decrease(el))
    }


    return (
        <div>
            {
                basketItems.length === 0 ? (
                    <h1>Your basket is currently empty </h1>
                ) : (<></>)
            }
            <div className="relative overflow-x-auto  p-5 px-14">
                <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className=" text-gray-100 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-400 ">
                    <tr>
                        <th className=" cloth px-20 py-12  ">
                            <img src={el.image} alt=""/>
                            <th scope="col" className="px-6 py-1 text-xl text-cyan-900">
                                <h1>{el.price * el.best} $</h1>
                            </th>
                        </th>

                        <th className=" name px-6 py-2 text-lg text-cyan-900">
                            <h1>{el.title}</h1>
                        </th>
                        <th className=" des px-6 py-2 text-xs ">
                            <p>{el.description}</p>
                        </th>

                        <th scope="col" className="px-6 py-1 text-xl text-cyan-900">
                            <h1 className=" text-2xl p-5 text-blue-950 cursor-pointer"><span
                                onClick={() => plus(el)}>+</span>
                                <span>{el.best}</span>
                                <span onClick={() => {
                                    minus(el)
                                }}>-</span></h1>
                        </th>
                        <button onClick={() => dispatch(removeFromBasket(el))}
                                className="text-3xl text-slate-400 ml-36 p-2">
                            <AiOutlineCloseCircle/>
                        </button>
                    </tr>

                    </thead>

                    <button onClick={() => dispatch(openOrder(el))}
                            className="buyBtn m-3 w-32 py-2  text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-600  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 px-px">Оставить
                        отзыв
                    </button>

                </table>
                <h1>{el.amount}</h1>
            </div>
        </div>

    );
};

export default BasketCard;