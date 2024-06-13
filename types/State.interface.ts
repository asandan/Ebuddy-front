import { AuthState } from "./Auth.interface";

export interface AppState {
  auth: AuthState,
}

export type AppStates =
  | keyof AppState["auth"]