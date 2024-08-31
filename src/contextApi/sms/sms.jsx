import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const sendPersonalSms = async (data) => {
  try {
    let responseOnSendPersonalSms = await axios.post(
      "/api/sendPersonalSms",
      data
    )
    if (responseOnSendPersonalSms) {
      if (responseOnSendPersonalSms.status === SUCCESS_STATUS) {
        return responseOnSendPersonalSms.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const sendBulkSms = async (data) => {
  try {
    let responseOnSendSms = await axios.post("/api/sendBulkSms", data)
    if (responseOnSendSms) {
      if (responseOnSendSms.status === SUCCESS_STATUS) {
        return responseOnSendSms.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllSms = async (data) => {
  try {
    let responseOnGetAllSms = await axios.get(
      `/api/getAllSms?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllSms) {
      if (responseOnGetAllSms.status === SUCCESS_STATUS) {
        return responseOnGetAllSms.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
