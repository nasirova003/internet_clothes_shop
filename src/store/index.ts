import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productSlice from "./Reducers/ProductSlice";
import basketSlice from "./Reducers/BasketSlice";
import  favoriteSlice from "./Reducers/FavoriteSlice";
import  darkModeSlice from "./Reducers/DarkModeSlice";
import  modalSlice from "./Reducers/ModalSlice";
import   orderSlice from "./Reducers/OrderSlice";

const rootReducers = combineReducers({
    productSlice,
    basketSlice,
    favoriteSlice,
    darkModeSlice,
    modalSlice,
    orderSlice,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducers
    })
}

export type rootState = ReturnType<typeof rootReducers>
type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']