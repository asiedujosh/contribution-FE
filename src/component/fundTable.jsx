import React, { useContext } from "react"
import { FUNDTABLE } from "../constant/fundConstant"
import { FundApiData } from "../contextApi/fund/fundContextApi"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import ReadDate from "../utils/readDate"
import { Link } from "react-router-dom"

const FundTable = () => {
  const { fundList, searchFundRecord, processDeleteFund } =
    useContext(FundApiData)
  const { memberIdOptions } = useContext(MemberApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {FUNDTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchFundRecord.length > 0
            ? searchFundRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {ReadDate(item.created_at)}
                  </td>

                  <td className="border border-gray-200 py-4 px-2">
                    {
                      memberIdOptions.filter(
                        (item2) => item2.id == item.memberId
                      )[0].name
                    }
                  </td>

                  <td className="border border-gray-200 py-4 px-2">
                    {item.amount}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.reason}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.remark}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editBranch/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeleteBranches({ id: item.id })
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : fundList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {ReadDate(item.created_at)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {
                      memberIdOptions.filter(
                        (item2) => item2.id == item.memberId
                      )[0].name
                    }
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.amount}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.reason}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.remark}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editFund/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <span
                        onClick={() => {
                          processDeleteFund({ id: item.id })
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

export default FundTable
