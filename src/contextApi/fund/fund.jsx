import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addFund = async (data) => {
  try {
    let responseOnAddFund = await axios.post("/api/storeFund", data)
    if (responseOnAddFund) {
      if (responseOnAddFund.status === SUCCESS_STATUS) {
        return responseOnAddFund.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchFund = async (data) => {
  try {
    let responseOnSearchFund = await axios.get(
      `/api/searchFund?keyword=${data}`
    )
    if (responseOnSearchFund) {
      if (responseOnSearchFund.status === SUCCESS_STATUS) {
        return responseOnSearchFund.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const countFund = async () => {
  try {
    let responseOnCountFund = await axios.get("/api/countFund")
    if (responseOnCountFund) {
      if (responseOnCountFund.status === SUCCESS_STATUS) {
        return responseOnCountFund.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const sumFund = async () => {
  try {
    let responseOnSumFund = await axios.get("/api/sumFund")
    if (responseOnSumFund) {
      if (responseOnSumFund.status === SUCCESS_STATUS) {
        return responseOnSumFund.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllFund = async (data) => {
  try {
    let responseOnGetAllFund = await axios.get(
      `/api/getAllFund?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllFund) {
      if (responseOnGetAllFund.status === SUCCESS_STATUS) {
        return responseOnGetAllFund.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editFund = async (data) => {
  try {
    let responseOnEditFund = await axios.put(`/api/updateFund/${data.id}`, data)
    if (responseOnEditFund) {
      if (responseOnEditFund.status === SUCCESS_STATUS) {
        return responseOnEdit.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteFund = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteFund = await axios.delete(`/api/deleteFund/${data.id}`)
    if (responseOnDeleteFund) {
      if (responseOnDeleteFund.status === SUCCESS_STATUS) {
        return responseOnDeleteFund.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
