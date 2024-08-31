import { useContext, useEffect, useState } from "react"
import PaginationContainer from "../container/paginationContainer"
import { BranchesApiData } from "../contextApi/branches/branchesContextApi"
import SearchContainer from "./searchContainer"
import BranchTable from "../component/branchTable"

const BranchTableContainer = () => {
  const { processGetAllBranches, paginationData, processSearchBranches } =
    useContext(BranchesApiData)
  const [searchTerm, setSearchTerm] = useState("")

  // useEffect(() => {
  //   processGetAllBranches()
  // }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchBranches(searchTerm)
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
        <BranchTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllBranches}
      />
    </div>
  )
}

export default BranchTableContainer
