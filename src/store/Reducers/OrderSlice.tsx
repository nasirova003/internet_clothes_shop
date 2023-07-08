import {createSlice} from "@reduxjs/toolkit";

interface IOrder {
    isOpenOrder: boolean
}

const initialState: IOrder = {
    isOpenOrder: false,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        openOrder(state) {
            state.isOpenOrder = true
        },
        closeOrder(state) {
            state.isOpenOrder = false
        }
    }
})

export const {openOrder, closeOrder} = orderSlice.actions
export default orderSlice.reducer;