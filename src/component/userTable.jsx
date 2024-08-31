import React, { useContext } from "react"
import { USERTABLE } from "../constant/loginConstant"
import { UserApiData } from "../contextApi/users/userContextApi"
import { Link } from "react-router-dom"

const UserTable = () => {
  const { allUsers, processDeleteUser } = useContext(UserApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {USERTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {allUsers.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">
                {item.firstName}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.lastName}
              </td>
              <td className="border border-gray-200 py-4 px-2">{item.email}</td>
              <td className="border border-gray-200 py-4 px-2">{item.type}</td>
              <td className="w-1/4 border border-gray-200 py-4 px-2">
                <div className="flex space-x-2">
                  <Link
                    to={`/dashboard/editUser/${item.id}/edit`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                  <span
                    onClick={() => {
                      processDeleteUser({ id: item.id })
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Delete
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UserTable
