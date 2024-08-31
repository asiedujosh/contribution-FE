import { useContext, useEffect, useState } from "react"
import PaginationContainer from "../container/paginationContainer"
import { FundApiData } from "../contextApi/fund/fundContextApi"
import SearchContainer from "./searchContainer"
import FundTable from "../component/fundTable"

const FundTableContainer = () => {
  const { processGetAllFund, paginationData, processSearchFund } =
    useContext(FundApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllFund()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchFund(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="overflow-auto" style={{ height: "80%" }}>
        <FundTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllFund}
      />
    </div>
  )
}

export default FundTableContainer
