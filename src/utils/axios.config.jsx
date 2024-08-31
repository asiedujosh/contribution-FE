import { URL, TIMEOUT } from "../constant/constant"
import axios from "axios"
import cookieMethods from "./cookieUtils"

const instance = axios.create({
  baseURL: URL,
  timeout: TIMEOUT,
  config: {
    withCredentials: true,
    crossDomain: true,
  },
})

let refToken
let data = cookieMethods.getCookies()
if (data) refToken = data.token

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      ;(async () => {
        const response = await axios.post("/admin/auth/refreshToken", {
          refToken,
        })
        if (response.status === 200) {
          cookieMethods.setCookies(response.data.accessToken, username)
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`

          return axios(error.config)
        }
      })()
      return error
    }
  }
)

export default instance
