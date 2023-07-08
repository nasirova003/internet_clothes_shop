import {IProduct} from "../../types/interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../index";

interface IState {
   favoriteItems: IProduct[]
    totalQuantity:number,
    totalPrice:number,
    value: string
}

const initialState: IState = {
    favoriteItems: [],
    totalQuantity:0,
    totalPrice:0,
    value: ''
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<any>) {
            const fav = state.favoriteItems.find(el=> el.id === action.payload.id)
            if (fav) {
                state.favoriteItems=state.favoriteItems.filter(el=>el.id !== fav.id)
            } else {
                state.favoriteItems = [...state.favoriteItems ,{...action.payload, best:1}]
            }

        },
        fetchingSearch (state,action: PayloadAction<any>){
            state.value = action.payload
        },
        removeFromFavorite(state,action:PayloadAction<any>){
            const nextBasketItem = state.favoriteItems.filter(el=> el.id !== action.payload.id)
            state.favoriteItems = nextBasketItem
        },
        clearFavorite(state){
            state.favoriteItems = []
        }
    }
})
export const rest = (value:any)=> async (dispatch : AppDispatch)=> {
    dispatch(fetchingSearch(value))
}


export const {fetchingSearch,clearFavorite,removeFromFavorite,addToFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer;