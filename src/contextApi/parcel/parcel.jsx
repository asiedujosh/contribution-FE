import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addParcel = async (data) => {
  try {
    let responseOnAddParcel = await axios.post("/api/storeParcel", data)
    if (responseOnAddParcel) {
      if (responseOnAddParcel.status === SUCCESS_STATUS) {
        return responseOnAddParcel.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchParcel = async (data) => {
  try {
    let responseOnSearchParcel = await axios.get(
      `/api/searchParcel?keyword=${data}`
    )
    if (responseOnSearchParcel) {
      if (responseOnSearchParcel.status === SUCCESS_STATUS) {
        return responseOnSearchParcel.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllParcel = async (data) => {
  try {
    let responseOnGetAllParcel = await axios.get(
      `/api/getAllParcel?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllParcel) {
      if (responseOnGetAllParcel.status === SUCCESS_STATUS) {
        return responseOnGetAllParcel.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editParcel = async (data) => {
  try {
    let responseOnEditParcel = await axios.put(
      `/api/updateParcel/${data.id}`,
      data
    )
    if (responseOnEditParcel) {
      if (responseOnEditParcel.status === SUCCESS_STATUS) {
        return responseOnEditParcel.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteParcel = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteParcel = await axios.delete(
      `/api/deleteParcel/${data.id}`
    )

    if (responseOnDeleteParcel) {
      if (responseOnDeleteParcel.status === SUCCESS_STATUS) {
        return responseOnDeleteParcel.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
