import React, { useContext } from "react"
import { SMSTABLE } from "../constant/smsConstant"
import { SmsApiData } from "../contextApi/sms/smsContextApi"

const SmsTable = () => {
  const { smsList } = useContext(SmsApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {SMSTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {smsList.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">
                {item.smsType}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SmsTable
