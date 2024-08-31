import React, { useContext } from "react"
import { BRANCHESTABLE } from "../constant/branchesConstant"
import { BranchesApiData } from "../contextApi/branches/branchesContextApi"
import { Link } from "react-router-dom"

const BranchTable = () => {
  const { branchesList, searchBranchesRecord, processDeleteBranches } =
    useContext(BranchesApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {BRANCHESTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchBranchesRecord.length > 0
            ? searchBranchesRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.branchCode}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.street}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.city}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.state}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.zipCode}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.country}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.contact}
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
            : branchesList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.branchCode}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.street}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.city}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.state}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.zipCode}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.country}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.contact}
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
              ))}
        </tbody>
      </table>
    </>
  )
}

export default BranchTable
