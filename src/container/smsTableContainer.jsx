import { useContext, useEffect, useState } from "react"
import PaginationContainer from "../container/paginationContainer"
import { SmsApiData } from "../contextApi/sms/smsContextApi"
import SmsTable from "../component/smsTable"

const SmsTableContainer = () => {
  const { processGetAllSms, paginationData } = useContext(SmsApiData)

  useEffect(() => {
    processGetAllSms()
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <SmsTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllSms}
      />
    </div>
  )
}

export default SmsTableContainer
