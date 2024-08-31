import { useContext, useEffect, useState } from "react"
import PaginationContainer from "../container/paginationContainer"
import { ContypeApiData } from "../contextApi/contype/contypeContextApi"
import SearchContainer from "./searchContainer"
import ContypeTable from "../component/contypeTable"

const ContypeTableContainer = () => {
  const { processGetAllContype, paginationData, processSearchContype } =
    useContext(ContypeApiData)
  const [searchTerm, setSearchTerm] = useState("")

  // useEffect(() => {
  //   processGetAllContype()
  // }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchContype(searchTerm)
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
        <ContypeTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllContype}
      />
    </div>
  )
}

export default ContypeTableContainer
