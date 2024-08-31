import { useContext, useEffect, useState } from "react"
import PaginationContainer from "../container/paginationContainer"
import { ContributionApiData } from "../contextApi/contribution/contributionContextApi"
import SearchContainer from "./searchContainer"
import ContributionTable from "../component/contributionTable"

const ContributionTableContainer = () => {
  const {
    processGetAllContribution,
    paginationData,
    processSearchContribution,
  } = useContext(ContributionApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllContribution()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchContribution(searchTerm)
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
        <ContributionTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllContribution}
      />
    </div>
  )
}

export default ContributionTableContainer
