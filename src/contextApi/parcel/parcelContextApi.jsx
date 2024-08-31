import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllParcel,
  addParcel,
  searchParcel,
  editParcel,
  deleteParcel,
} from "./parcel"

export const ParcelApiData = createContext()

const ParcelApiDataProvider = (props) => {
  const [parcelList, setParcelList] = useState([])
  const [searchParcelRecord, setSearchParcelRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  //   const [examOptions, setExamOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processSearchParcel = async (data) => {
    let responseOnSearchParcel = await searchParcel(data)
    if (responseOnSearchParcel) {
      setSearchParcelRecord(responseOnSearchParcel.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllParcel = async (data) => {
    let response = await getAllParcel(data || 1)
    if (response) {
      setParcelList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddParcel = async (data) => {
    let response = await addParcel(data)
    if (response) {
      processGetAllParcel()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateParcel = async (data) => {
    let response = await editParcel(data)
    if (response) {
      processGetAllParcel()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteParcel = async (data) => {
    // console.log(data)
    let response = await deleteParcel(data)
    if (response) {
      processGetAllParcel()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <ParcelApiData.Provider
      value={{
        processSearchParcel,
        processGetAllParcel,
        processAddParcel,
        processUpdateParcel,
        processDeleteParcel,
        parcelList,
        searchParcelRecord,
        searchPaginationData,
        paginationData,
      }}
    >
      {props.children}
    </ParcelApiData.Provider>
  )
}

export default ParcelApiDataProvider
