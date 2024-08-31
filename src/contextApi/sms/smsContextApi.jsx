import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import { sendPersonalSms, sendBulkSms, getAllSms } from "./sms"

export const SmsApiData = createContext()

const SmsApiDataProvider = (props) => {
  const [smsList, setSmsList] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processGetAllSms = async (data) => {
    let response = await getAllSms(data || 1)
    if (response) {
      setSmsList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSendBulkSms = async (data) => {
    let response = await sendBulkSms(data)
    if (response) {
      processGetAllSms()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processSendPersonalSms = async (data) => {
    let response = await sendPersonalSms(data)
    if (response) {
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <SmsApiData.Provider
      value={{
        processGetAllSms,
        processSendBulkSms,
        processSendPersonalSms,
        smsList,
        paginationData,
      }}
    >
      {props.children}
    </SmsApiData.Provider>
  )
}

export default SmsApiDataProvider
