import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import SearchContainer from "./searchContainer"
import ActiveMemberTable from "../component/activeMemberTable"

const ActiveMemberTableContainer = () => {
  const {
    processGetAllActiveMember,
    paginationData,
    processSearchActiveMember,
  } = useContext(MemberApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllActiveMember()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchActiveMember(searchTerm)
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
        <ActiveMemberTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllActiveMember}
      />
    </div>
  )
}

export default ActiveMemberTableContainer
