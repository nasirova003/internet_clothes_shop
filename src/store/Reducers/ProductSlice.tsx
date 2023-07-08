import {IProduct} from "../../types/interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    product: IProduct[]
    loader: boolean
    error: string
}

const initialState: IState = {
    product: [],
    loader: false,
    error: ''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchingProduct(state) {
            state.loader = true
        },
        fetchingProductSuccess(state, action: PayloadAction<IProduct[]>) {
            state.product = action.payload
            state.loader = false
            state.error = ''
        },
        fetchingProductError(state, action: PayloadAction<string>) {
            state.product = []
            state.loader = false
            state.error = action.payload
        }
    }
})

export default productSlice.reducer
export const {fetchingProduct, fetchingProductSuccess, fetchingProductError} = productSlice.actions