import axios from "axios";
import { isDev, prodUrl, serverUrl } from "../env";

export class QueryService {
  /**
   *
   * @param url
   * @param data
   */
  public static async postQuery(url: string, data: {}) {
    const resp = await axios.post((isDev ? serverUrl : prodUrl) + url, {
      ...data,
    });
      console.log('!!')
      console.log(resp)
    return resp;
  }
}
