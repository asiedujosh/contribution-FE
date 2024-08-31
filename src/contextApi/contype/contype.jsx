import axios from "../../utils/axios.config"
import { LISTALL, SUCCESS_STATUS } from "../../constant/constant"

export const addContype = async (data) => {
  try {
    let responseOnAddContype = await axios.post("/api/storeContype", data)
    if (responseOnAddContype) {
      if (responseOnAddContype.status === SUCCESS_STATUS) {
        return responseOnAddContype.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchContype = async (data) => {
  try {
    let responseOnSearchContype = await axios.get(
      `/api/searchContype?keyword=${data}`
    )
    if (responseOnSearchContype) {
      if (responseOnSearchContype.status === SUCCESS_STATUS) {
        return responseOnSearchContype.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllContype = async (data) => {
  try {
    let responseOnGetAllContype = await axios.get(
      `/api/getAllContype?page=${data}&perPage=${LISTALL}`
    )
    if (responseOnGetAllContype) {
      if (responseOnGetAllContype.status === SUCCESS_STATUS) {
        return responseOnGetAllContype.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editContype = async (data) => {
  try {
    let responseOnEditContype = await axios.put(
      `/api/updateContype/${data.id}`,
      data
    )
    if (responseOnEditContype) {
      if (responseOnEditContype.status === SUCCESS_STATUS) {
        return responseOnEditContype.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteContype = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteContype = await axios.delete(
      `/api/deleteContype/${data.id}`
    )

    if (responseOnDeleteContype) {
      if (responseOnDeleteContype.status === SUCCESS_STATUS) {
        return responseOnDeleteContype.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
