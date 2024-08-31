import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllContype,
  addContype,
  searchContype,
  editContype,
  deleteContype,
} from "./contype"

export const ContypeApiData = createContext()

const ContypeApiDataProvider = (props) => {
  const [contypeList, setContypeList] = useState([])
  const [contypeOptions, setContypeOptions] = useState([])
  const [searchContypeRecord, setSearchContypeRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  //   const [examOptions, setExamOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processSearchContype = async (data) => {
    let responseOnSearchContype = await searchContype(data)
    if (responseOnSearchContype) {
      setSearchContypeRecord(responseOnSearchContype.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllContype = async (data) => {
    let response = await getAllContype(data || 1)
    if (response) {
      setContypeList(response.data.data.data)
      setPaginationData(response.data.pagination)
      // Add for contype options
      let dummy = []
      response.data.data.data.map((item) => dummy.push(item.contypeName))
      setContypeOptions(dummy)
    }
  }

  const processAddContype = async (data) => {
    let response = await addContype(data)
    if (response) {
      processGetAllContype()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateContype = async (data) => {
    let response = await editContype(data)
    if (response) {
      processGetAllContype()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteContype = async (data) => {
    // console.log(data)
    let response = await deleteContype(data)
    if (response) {
      processGetAllContype()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <ContypeApiData.Provider
      value={{
        processSearchContype,
        processGetAllContype,
        processAddContype,
        processUpdateContype,
        processDeleteContype,
        contypeOptions,
        contypeList,
        searchContypeRecord,
        searchPaginationData,
        paginationData,
      }}
    >
      {props.children}
    </ContypeApiData.Provider>
  )
}

export default ContypeApiDataProvider
