import { METHODS, request } from "@/util";
import { API } from ".";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  sessionLogin: (tokenId: string) => request(METHODS.GET, API.AUTH.sessionLogin(), { tokenId })(),
}