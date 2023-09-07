import {AppDispatch} from "../index";
import {fetchingProduct,fetchingProductSuccess,fetchingProductError} from "./ProductSlice";
import axios from "axios";

export const getProduct = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingProduct())
            const res = await axios(`https://fakestoreapi.com/products`)
            dispatch(fetchingProductSuccess(res.data))
        } catch (e: any) {
            dispatch(fetchingProductError(e.message))
        }
    }
}
