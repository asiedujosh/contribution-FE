import { useContext, useEffect } from "react"
import PaginationContainer from "../container/paginationContainer"
import { UserApiData } from "../contextApi/users/userContextApi"
import UserTable from "../component/userTable"

const UserTableContainer = () => {
  const { processGetAllUser, paginationData } = useContext(UserApiData)

  useEffect(() => {
    processGetAllUser()
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <UserTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllUser}
      />
    </div>
  )
}

export default UserTableContainer
