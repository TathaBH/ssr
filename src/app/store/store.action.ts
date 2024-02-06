import { createAction, props } from "@ngrx/store";
import { UserData } from "../user-data";

export const storeAction = createAction(
    '[Get Users] On click get users',
    props<UserData>()
    )