import { useContext, useEffect, useState } from "react"
import PaginationContainer from "../container/paginationContainer"
import { ParcelApiData } from "../contextApi/parcel/parcelContextApi"
import SearchContainer from "./searchContainer"
import ParcelTable from "../component/parcelTable"

const ParcelTableContainer = () => {
  const { processGetAllParcel, paginationData, processSearchParcel } =
    useContext(ParcelApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllParcel()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchParcel(searchTerm)
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
        <ParcelTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllParcel}
      />
    </div>
  )
}

export default ParcelTableContainer
