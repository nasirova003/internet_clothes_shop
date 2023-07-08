import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {getProduct} from "../store/Reducers/ActionCreators";
import ProductCard from "./ProductCard";


const Home = () => {
    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(state => state.darkModeSlice)
    const {product, loader, error} = useAppSelector(state => state.productSlice)


    useEffect(() => {
        dispatch(getProduct())
    }, [])
    console.log(product)
    const [value,setValue] = useState('')

    return (
        <div style={{
        background:mode ? "grey": ""
    }}>
             <h1 className="tittle  text-blue-900" style={{
                color:mode ? "white": "black"
             }}>Добро пожаловать в наш магазин!</h1>
            <div className="flex flex-wrap  p-20" >
                {loader && <p>loading...</p>}
                {error && <p>Error!</p>}
                {
                    product.map(el => (
                        <div>
                        <ProductCard el={el}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;