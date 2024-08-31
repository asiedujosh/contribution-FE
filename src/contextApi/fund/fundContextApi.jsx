import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllFund,
  addFund,
  sumFund,
  countFund,
  searchFund,
  editFund,
  deleteFund,
} from "./fund"

export const FundApiData = createContext()

const FundApiDataProvider = (props) => {
  const [fundList, setFundList] = useState([])
  const [searchFundRecord, setSearchFundRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [noOfFund, setNoOfFund] = useState(0)
  const [sumFundState, setSumFundState] = useState(0)
  const [paginationData, setPaginationData] = useState()

  const processSearchFund = async (data) => {
    let responseOnSearchFund = await searchFund(data)
    if (responseOnSearchFund) {
      setSearchFundRecord(responseOnSearchFund.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllFund = async (data) => {
    let response = await getAllFund(data || 1)
    if (response) {
      setFundList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSumFund = async () => {
    let response = await sumFund()
    if (response) {
      setSumFundState(response.data.data)
    }
  }

  const processCountFund = async () => {
    let response = await countFund()
    if (response) {
      setNoOfFund(response.data.data)
    }
  }

  const processAddFund = async (data) => {
    let response = await addFund(data)
    if (response) {
      processGetAllFund()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateFund = async (data) => {
    let response = await editFund(data)
    if (response) {
      processGetAllFund()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteFund = async (data) => {
    // console.log(data)
    let response = await deleteFund(data)
    if (response) {
      processGetAllFund()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <FundApiData.Provider
      value={{
        processSearchFund,
        processGetAllFund,
        processCountFund,
        processAddFund,
        processSumFund,
        processUpdateFund,
        processDeleteFund,
        fundList,
        noOfFund,
        sumFundState,
        searchFundRecord,
        searchPaginationData,
        paginationData,
      }}
    >
      {props.children}
    </FundApiData.Provider>
  )
}

export default FundApiDataProvider
