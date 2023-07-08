import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getProduct} from "../../store/Reducers/ActionCreators";
import ProductCard from "./index";

const Product = () => {
    const {mode} = useAppSelector(state => state.darkModeSlice)
    const {product, loader, error} = useAppSelector(state => state.productSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    console.log(product)
    return (
        <div>
            <div className="flex flex-wrap  p-20"  style={{
                background:mode ? "gray": ""
            }}>
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

export default Product;