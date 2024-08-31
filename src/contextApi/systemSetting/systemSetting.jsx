import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addSystemSetting = async (data) => {
  try {
    let responseOnAddSetting = await axios.post("/api/storeSetting", data)
    if (responseOnAddSetting) {
      if (responseOnAddSetting.status === SUCCESS_STATUS) {
        return responseOnAddSetting.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllSetting = async (data) => {
  try {
    let responseOnGetAllSetting = await axios.get(
      `/api/getAllSetting?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllSetting) {
      if (responseOnGetAllSetting.status === SUCCESS_STATUS) {
        return responseOnGetAllSetting.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editSetting = async (data) => {
  try {
    let responseOnEditSetting = await axios.put(
      `/api/updateSetting/${data.id}`,
      data
    )
    if (responseOnEditSetting) {
      if (responseOnEditSetting.status === SUCCESS_STATUS) {
        return responseOnEditSetting.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteSetting = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteSetting = await axios.delete(
      `/api/deleteSetting/${data.id}`
    )

    if (responseOnDeleteSetting) {
      if (responseOnDeleteSetting.status === SUCCESS_STATUS) {
        return responseOnDeleteSetting.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
