import { createReducer, on } from "@ngrx/store";
import { storeAction } from "./store.action";
import { UserData } from "../user-data";

const initialState: UserData = {name:'w', username:'w', email:'w'}
export const storeReducer = createReducer(
    initialState,
    on(storeAction, (state, props) => {
        console.log(state)
        
        return state
    })
)