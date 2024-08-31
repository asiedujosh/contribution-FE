import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllBranches,
  addBranches,
  searchBranches,
  editBranches,
  deleteBranches,
} from "./branches"

export const BranchesApiData = createContext()

const BranchesApiDataProvider = (props) => {
  const [branchesList, setBranchesList] = useState([])
  const [searchBranchesRecord, setSearchBranchesRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  //   const [examOptions, setExamOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processSearchBranches = async (data) => {
    let responseOnSearchBranches = await searchBranches(data)
    if (responseOnSearchBranches) {
      setSearchBranchesRecord(responseOnSearchBranches.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllBranches = async (data) => {
    let response = await getAllBranches(data || 1)
    if (response) {
      setBranchesList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddBranches = async (data) => {
    let response = await addBranches(data)
    if (response) {
      processGetAllBranches()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateBranches = async (data) => {
    let response = await editBranches(data)
    if (response) {
      processGetAllBranches()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteBranches = async (data) => {
    // console.log(data)
    let response = await deleteBranches(data)
    if (response) {
      processGetAllBranches()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <BranchesApiData.Provider
      value={{
        processSearchBranches,
        processGetAllBranches,
        processAddBranches,
        processUpdateBranches,
        processDeleteBranches,
        branchesList,
        searchBranchesRecord,
        searchPaginationData,
        paginationData,
      }}
    >
      {props.children}
    </BranchesApiData.Provider>
  )
}

export default BranchesApiDataProvider
