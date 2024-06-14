import { AppState } from "@/types/State.interface";
import { createSelector } from "reselect";

const selectApiDataState = (state: AppState) => state.apiData;
export const getApiData= () => createSelector(selectApiDataState, (state) => state)