import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addContribution = async (data) => {
  try {
    let responseOnAddContribution = await axios.post(
      "/api/storeContribution",
      data
    )
    if (responseOnAddContribution) {
      if (responseOnAddContribution.status === SUCCESS_STATUS) {
        return responseOnAddContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const sumContribution = async () => {
  try {
    let responseOnSumContribution = await axios.get("/api/sumContribution")
    if (responseOnSumContribution) {
      if (responseOnSumContribution.status === SUCCESS_STATUS) {
        return responseOnSumContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const countContribution = async () => {
  try {
    let responseOnCountContribution = await axios.get("/api/countContribution")
    if (responseOnCountContribution) {
      if (responseOnCountContribution.status === SUCCESS_STATUS) {
        return responseOnCountContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchContribution = async (data) => {
  try {
    let responseOnSearchContribution = await axios.get(
      `/api/searchContribution?keyword=${data}`
    )
    if (responseOnSearchContribution) {
      if (responseOnSearchContribution.status === SUCCESS_STATUS) {
        return responseOnSearchContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getMostAllContribution = async () => {
  try {
    let responseOnGetMostAllContribution = await axios.get(
      `/api/getMostAllContribution`
    )
    if (responseOnGetMostAllContribution) {
      if (responseOnGetMostAllContribution.status === SUCCESS_STATUS) {
        return responseOnGetMostAllContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

export const getAllContribution = async (data) => {
  try {
    let responseOnGetAllContribution = await axios.get(
      `/api/getAllContribution?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllContribution) {
      if (responseOnGetAllContribution.status === SUCCESS_STATUS) {
        return responseOnGetAllContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editContribution = async (data) => {
  try {
    let responseOnEditContribution = await axios.put(
      `/api/updateContribution/${data.id}`,
      data
    )
    if (responseOnEditContribution) {
      if (responseOnEditContribution.status === SUCCESS_STATUS) {
        return responseOnEditContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteContribution = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteContribution = await axios.delete(
      `/api/deleteContribution/${data.id}`
    )

    if (responseOnDeleteContribution) {
      if (responseOnDeleteContribution.status === SUCCESS_STATUS) {
        return responseOnDeleteContribution.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
