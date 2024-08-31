import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllSetting,
  addSystemSetting,
  editSetting,
  deleteSetting,
} from "./systemSetting"

export const SystemApiData = createContext()

const SystemApiDataProvider = (props) => {
  const [systemList, setSystemList] = useState([])
  //   const [examOptions, setExamOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processGetAllSetting = async (data) => {
    let response = await getAllSetting(data || 1)
    if (response) {
      setSystemList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddSetting = async (data) => {
    let response = await addSystemSetting(data)
    if (response) {
      processGetAllSetting()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateSetting = async (data) => {
    let response = await editSetting(data)
    if (response) {
      processGetAllSetting()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteSetting = async (data) => {
    // console.log(data)
    let response = await deleteSetting(data)
    if (response) {
      processGetAllParcel()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <SystemApiData.Provider
      value={{
        processGetAllSetting,
        processAddSetting,
        processUpdateSetting,
        processDeleteSetting,
        systemList,
        paginationData,
      }}
    >
      {props.children}
    </SystemApiData.Provider>
  )
}

export default SystemApiDataProvider
