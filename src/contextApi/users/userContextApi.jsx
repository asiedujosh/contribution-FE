import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS } from "../../constant/constant"
import axios from "../../utils/axios.config"

import {
  login,
  getAllUser,
  register,
  editUser,
  deleteUser,
  retrieve,
  logout,
} from "./user"
import cookieMethods from "../../utils/cookieUtils"

export const UserApiData = createContext()

const UserApiDataProvider = (props) => {
  const [allUsers, setAllUsers] = useState([])
  const [userProfile, setUserProfile] = useState()
  const [loginError, setLoginError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [admin, setAdmin] = useState(false)

  const [paginationData, setPaginationData] = useState()

  //   const router = useRouter()

  const processLogin = async (data) => {
    setLoginError(false)
    let response = await login(data)
    if (response) {
      setUserProfile(response.data.data)
      if (
        response.data.data.role == "1" ||
        response.data.data.role == "Admin"
      ) {
        setAdmin((prev) => !prev)
      }
      // set the cookie
      cookieMethods.setCookies(response.data.token)
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      setLoginError((prev) => !prev)
      setIsLoading(false)
      // notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  }

  const processGetAllUser = async (data) => {
    let response = await getAllUser(data || 1)
    if (response) {
      setAllUsers(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processRegister = async (data) => {
    let response = await register(data)
    if (response) {
      console.log(response)
    }
  }

  const processUpdateUser = async (data) => {
    let response = await editUser(data)
    if (response) {
      processGetAllUser()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteUser = async (data) => {
    // console.log(data)
    let response = await deleteUser(data)
    if (response) {
      processGetAllUser()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processRetrieve = async () => {
    let cookieData = cookieMethods.getCookies()
    if (!cookieData.accessToken) return false
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookieData.accessToken}`

    let response = await retrieve()
    if (response) {
      // console.log(response)
      setUserProfile(response.data)
      if (response.data.type == "1" || response.data.type == "Admin") {
        setAdmin(true)
      }
      setIsAuthenticated(true)
      return true
    } else {
      return false
    }
  }

  const processLogout = async () => {
    let response = await logout()
    if (response) {
      cookieMethods.deleteCookies()
      setIsAuthenticated(false)
      return false
    }
  }

  return (
    <UserApiData.Provider
      value={{
        allUsers,
        setAllUsers,
        admin,
        loginError,
        userProfile,
        setUserProfile,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        paginationData,
        setIsLoading,
        processLogin,
        processRegister,
        processGetAllUser,
        processUpdateUser,
        processDeleteUser,
        processLogout,
        processRetrieve,
      }}
    >
      {props.children}
    </UserApiData.Provider>
  )
}

export default UserApiDataProvider
