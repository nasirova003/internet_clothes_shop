import {IAdmin, IProduct} from "../../types/interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../index";



interface IState {
    basketItems: IProduct[]
    value: string,
    admin: IAdmin[]
}

const initialState: IState = {
    basketItems:[],
    value: '',
    admin: []
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<any>) {

            const baskets = state.basketItems.find(el => el.id === action.payload.id)
            if (baskets) {
                state.basketItems = state.basketItems.filter(el => el.id !== baskets.id ? {...el} : 1)
            } else {
                state.basketItems = [...state.basketItems, {...action.payload, best: 1}]
            }

        },
        fetchingAdmin(state, action: PayloadAction<any>) {
            state.admin.push(action.payload)

        },
        removeFromAdmin(state, action: PayloadAction<any>) {
            const nextAdminItem = state.admin.filter(el => el.id !== action.payload.id)
            state.admin = nextAdminItem
        },
        fetchingSearch(state, action: PayloadAction<any>) {
            state.value = action.payload
        },
        removeFromBasket(state, action: PayloadAction<any>) {
            state.basketItems = state.basketItems.filter(el => el.id !== action.payload.id)
            const nextBasketItem = state.basketItems.filter(el => el.id !== action.payload.id)
            state.basketItems = nextBasketItem
        },

        clearBasket(state) {
            state.basketItems = []
        },

        increase(state, action: PayloadAction<any>) {
            const item = state.basketItems.find((el) => el.id === action.payload.id)
            if (item) {
                state.basketItems = state.basketItems.map(el => el.id === item.id ? {...el, best: el.best + 1} : el)
            } else {
                state.basketItems = [...state.basketItems, {...action.payload, amount: 1}]
            }
        },
        decrease(state, action: PayloadAction<any>) {
            const item = state.basketItems.findIndex((el) => el.id === action.payload.id)

            if (state.basketItems[item].best > 1) {
                state.basketItems[item].best -= 1
            } else if (state.basketItems[item].best === 1) {
                const nextCartItems = state.basketItems.filter((el) => el.id !== action.payload.id)
                state.basketItems = nextCartItems
            }
        },
    }
})


export const search = (value: any) => async (dispatch: AppDispatch) => {
    dispatch(fetchingSearch(value))
}



export const {
    addToBasket,
    fetchingSearch,
    removeFromBasket,
    clearBasket,
    fetchingAdmin,
    removeFromAdmin,
    increase,
    decrease,
} = basketSlice.actions
export default basketSlice.reducer;