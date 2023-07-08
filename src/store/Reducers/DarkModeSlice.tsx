import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../index";
import {fetchingSearch} from "./FavoriteSlice";
 const tasks : any= localStorage.getItem('mode')

interface IState {
   mode:any
}

const initialState: IState = {
   mode:JSON.parse(tasks) || []
}

export const darkModeSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        toggleDarkMode (state,action:PayloadAction<any>) {
             state.mode  = !state.mode

        }

    }
})

export const rest = (value:any)=> async (dispatch : AppDispatch)=> {
    dispatch(fetchingSearch(value))
}


export const {toggleDarkMode} = darkModeSlice.actions
export default darkModeSlice.reducer;