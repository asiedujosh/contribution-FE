import React, { useContext } from "react"
import { MEMBERTABLE } from "../constant/memberConstant"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import { Link } from "react-router-dom"

const ActiveMemberTable = () => {
  const { activeMemberList, searchActiveMemberRecord, processBlockMember } =
    useContext(MemberApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {MEMBERTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchActiveMemberRecord.length > 0
            ? searchActiveMemberRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.memberId}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.firstName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.lastName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.contact}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.contactOne}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/sendSms/${item.contact}/edit`}
                        className="bg-yellow-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Message
                      </Link>
                      <Link
                        to={`/dashboard/editMember/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processBlockMember({ id: item.id })
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : activeMemberList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.memberId}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.firstName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.lastName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.contact}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.contactOne}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/sendSms/${item.contact}/edit`}
                        className="bg-yellow-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Message
                      </Link>
                      <Link
                        to={`/dashboard/editMember/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <span
                        onClick={() => {
                          processBlockMember({ id: item.id })
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Block
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

export default ActiveMemberTable
