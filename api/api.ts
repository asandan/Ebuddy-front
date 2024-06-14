import { METHODS, request } from "@/util";
import { API } from ".";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  sessionLogin: (idToken: string) => request(METHODS.POST, API.AUTH.sessionLogin(), { idToken })(),
  getData: () => request(METHODS.GET, API.DATA.getData())(),
}