import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import SearchContainer from "./searchContainer"
import BlockMemberTable from "../component/blockMemberTable"

const BlockMemberTableContainer = () => {
  const { processGetAllBlockMember, paginationData, processSearchBlockMember } =
    useContext(MemberApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetAllBlockMember()
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchBlockMember(searchTerm)
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
        <BlockMemberTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllBlockMember}
      />
    </div>
  )
}

export default BlockMemberTableContainer
