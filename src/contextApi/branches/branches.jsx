import axios from "../../utils/axios.config"
import { LISTALL, SUCCESS_STATUS } from "../../constant/constant"

export const addBranches = async (data) => {
  try {
    let responseOnAddBranches = await axios.post("/api/storeBranches", data)
    if (responseOnAddBranches) {
      if (responseOnAddBranches.status === SUCCESS_STATUS) {
        return responseOnAddBranches.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchBranches = async (data) => {
  try {
    let responseOnSearchBranches = await axios.get(
      `/api/searchBranches?keyword=${data}`
    )
    if (responseOnSearchBranches) {
      if (responseOnSearchBranches.status === SUCCESS_STATUS) {
        return responseOnSearchBranches.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllBranches = async (data) => {
  try {
    let responseOnGetAllBranches = await axios.get(
      `/api/getAllBranches?page=${data}&perPage=${LISTALL}`
    )
    if (responseOnGetAllBranches) {
      if (responseOnGetAllBranches.status === SUCCESS_STATUS) {
        return responseOnGetAllBranches.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editBranches = async (data) => {
  try {
    let responseOnEditBranches = await axios.put(
      `/api/updateBranches/${data.id}`,
      data
    )
    if (responseOnEditBranches) {
      if (responseOnEditBranches.status === SUCCESS_STATUS) {
        return responseOnEditBranches.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteBranches = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteBranches = await axios.delete(
      `/api/deleteBranches/${data.id}`
    )

    if (responseOnDeleteBranches) {
      if (responseOnDeleteBranches.status === SUCCESS_STATUS) {
        return responseOnDeleteBranches.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
