import React from 'react';
import {closeModal} from "../../store/Reducers/ModalSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {AiOutlineCloseCircle} from "react-icons/ai";
import shop from "../../img/shop.jpg"

const Modal = ({el}: any) => {
    const dispatch = useAppDispatch()
    const {isOpen} = useAppSelector(state => state.modalSlice)

    return (
        <div className="modalPage">
            <button className="text-2xl p-1 ml-96" onClick={() => dispatch(closeModal(el))}><AiOutlineCloseCircle
                className="text-white"/></button>
            <div className="modalImg">
                <img src={shop} alt="s"/>
            </div>
            <div className="block">
                <h1 className="text-xl">FASHION SHOP</h1>
                <p className="modalText">
                    Наш магазин обслуживает вдумчивых покупателей, которые ценят уникальный дизайн и высококачественные
                    вещи, которые вы просто не можете найти больше нигде. Мы постоянно курируем свежие новые коллекции и
                    ищем следующую большую вещь, которая понравится нашим клиентам. Основанная в Бишкеке в 2019 году, мы
                    гордимся тем, что являемся вашим интернет-магазином одежды, на который вы можете положиться в плане
                    профессионального обслуживания и заботы.
                </p>
            </div>

        </div>
    );
};

export default Modal;