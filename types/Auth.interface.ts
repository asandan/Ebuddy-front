import { ResponseError } from "./Response.interface";

export type AuthState = {
  email: string;
  password: string;
  loading: boolean;
  error: ResponseError | null;
};
