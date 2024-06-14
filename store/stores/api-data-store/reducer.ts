import { ActionType, createReducer } from "typesafe-actions"
import * as actions from "./actions"
import { produce } from "immer"
import { ApiDataState } from "@/types"

export const DEFAULT_API_DATA_STATE: ApiDataState = {
  data: "",
  loading: false,
  authorized: undefined,
}

const reducer = createReducer<typeof DEFAULT_API_DATA_STATE, ActionType<typeof actions>>(DEFAULT_API_DATA_STATE)
  .handleAction(actions.getApiData.success, (state, action) => produce(state, (nextState: any) => {
    const authType = action.payload.name;
    nextState[authType] = action.payload.value;
  }))
  .handleAction(actions.getApiData.failure, (state, action) => produce(state, (nextState: any) => {
    const { authorized } = action.payload;
    nextState.authorized = authorized;
  }))

export default reducer;