import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getMostAllContribution,
  getAllContribution,
  addContribution,
  searchContribution,
  editContribution,
  deleteContribution,
  sumContribution,
  countContribution,
} from "./contribution"

export const ContributionApiData = createContext()

const ContributionApiDataProvider = (props) => {
  const [allContribution, setAllContribution] = useState([])
  const [reasonOption, setReasonOption] = useState([])
  const [contributionList, setContributionList] = useState([])
  const [uniqueListOption, setUniqueListOption] = useState([])
  const [searchContributionRecord, setSearchContributionRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [sumContributionState, setContributionState] = useState(0)
  const [noOfContribution, setNoOfContribution] = useState(0)
  const [paginationData, setPaginationData] = useState()

  useEffect(() => {
    processGetMostAllContribution()
  }, [])

  const processSearchContribution = async (data) => {
    let responseOnSearchContribution = await searchContribution(data)
    if (responseOnSearchContribution) {
      setSearchContributionRecord(responseOnSearchContribution.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllContribution = async (data) => {
    let response = await getAllContribution(data || 1)
    if (response) {
      setContributionList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetMostAllContribution = async () => {
    let response = await getMostAllContribution()
    if (response) {
      const uniqueList = []
      let reasonsOnly = []
      setAllContribution(response.data.data)
      response.data.data.forEach((item) => {
        const existingItem = uniqueList.find(
          (uniqueItem) => uniqueItem.reason === item.reason
        )
        if (existingItem) {
          existingItem.amount =
            parseFloat(existingItem.amount) + parseFloat(item.amount)
        } else {
          reasonsOnly.push(item.reason)
          uniqueList.push({ ...item })
        }
      })
      setReasonOption(reasonsOnly)
      setUniqueListOption(uniqueList)
    }
  }

  const processCountContribution = async () => {
    let response = await countContribution()
    if (response) {
      setNoOfContribution(response.data.data)
    }
  }

  const processSumContribution = async () => {
    let response = await sumContribution()
    if (response) {
      // console.log(response)
      setContributionState(response.data.data)
    }
  }

  const processAddContribution = async (data) => {
    let response = await addContribution(data)
    if (response) {
      processGetAllContribution()
      processGetMostAllContribution()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateContribution = async (data) => {
    let response = await editContribution(data)
    if (response) {
      processGetAllContribution()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteContribution = async (data) => {
    // console.log(data)
    let response = await deleteContribution(data)
    if (response) {
      processGetAllContribution()
      processGetMostAllContribution()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <ContributionApiData.Provider
      value={{
        processSumContribution,
        processCountContribution,
        processSearchContribution,
        processGetAllContribution,
        processGetMostAllContribution,
        processAddContribution,
        processUpdateContribution,
        processDeleteContribution,
        allContribution,
        contributionList,
        uniqueListOption,
        reasonOption,
        searchContributionRecord,
        searchPaginationData,
        paginationData,
        sumContributionState,
        noOfContribution,
      }}
    >
      {props.children}
    </ContributionApiData.Provider>
  )
}

export default ContributionApiDataProvider
