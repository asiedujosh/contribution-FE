import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const login = async (data) => {
  try {
    let responseOnLogin = await axios.post("/api/login", data)
    if (responseOnLogin) {
      if (responseOnLogin.status === SUCCESS_STATUS) {
        return responseOnLogin.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllUser = async (data) => {
  try {
    let responseOnGetAllUser = await axios.get(
      `/api/getAllUser?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllUser) {
      if (responseOnGetAllUser.status === SUCCESS_STATUS) {
        return responseOnGetAllUser.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const register = async (data) => {
  try {
    let responseOnRegister = await axios.post("/api/register", data)
    if (responseOnRegister) {
      if (responseOnRegister.status === SUCCESS_STATUS) {
        return responseOnRegister.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

// update api /updateUser/{id} and delete ai '/deleteUser/{id}
export const editUser = async (data) => {
  try {
    let responseOnEditUser = await axios.put(`/api/updateUser/${data.id}`, data)
    if (responseOnEditUser) {
      if (responseOnEditUser.status === SUCCESS_STATUS) {
        return responseOnEditUser.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteUser = await axios.delete(`/api/deleteUser/${data.id}`)

    if (responseOnDeleteUser) {
      if (responseOnDeleteUser.status === SUCCESS_STATUS) {
        return responseOnDeleteUser.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const retrieve = async () => {
  try {
    let responseOnRetrieve = await axios.get("/api/retrieve")
    if (responseOnRetrieve) {
      if (responseOnRetrieve.status === SUCCESS_STATUS) {
        return responseOnRetrieve.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const logout = async () => {
  try {
    let responseOnLogout = await axios.post("/api/logout")
    if (responseOnLogout) {
      if (responseOnLogout.status === SUCCESS_STATUS) {
        return responseOnLogout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}
