import { ActionType, createReducer } from "typesafe-actions"
import * as actions from "./actions"
import { produce } from "immer"
import { AuthState } from "@/types/Auth.interface"

export const DEFAULT_AUTH_STATE: AuthState = {
  email: "",
  password: "",
  loading: false,
  error: null
}

const reducer = createReducer<typeof DEFAULT_AUTH_STATE, ActionType<typeof actions>>(DEFAULT_AUTH_STATE)
  .handleAction(actions.getAuthData.success, (state, action) => produce(state, (nextState) => {
    const authType = action.payload.name as any
    nextState[authType] = action.payload.value
  }))

export default reducer;