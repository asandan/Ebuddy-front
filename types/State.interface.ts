import { ApiDataState } from "./ApiData.interface";
import { AuthState } from "./Auth.interface";

export interface AppState {
  auth: AuthState,
  apiData: ApiDataState
}

export type AppStates =
  | keyof AppState["auth"]
  | keyof AppState["apiData"]