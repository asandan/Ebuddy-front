import { createAsyncAction } from "typesafe-actions"
import { API_DATA_ACTIONS } from "./constants";
import { ApiDataState } from "@/types";

export type ApiDataSuccess = {
  name: string,
  value: string | boolean;
}

export type ApiDataFailure = {
  authorized: boolean;
}

export const getApiData = createAsyncAction(
  API_DATA_ACTIONS.GET_API_DATA,
  API_DATA_ACTIONS.GET_API_DATA_SUCCESS,
  API_DATA_ACTIONS.GET_API_DATA_FAILURE
)<ApiDataState, ApiDataSuccess, ApiDataFailure>()