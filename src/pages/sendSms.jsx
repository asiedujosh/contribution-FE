import { useState, useContext, useEffect } from "react"
import { ADDSMS } from "../constant/smsConstant"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
// import LoadingBtn from "../components/loadingButton"
import { SmsApiData } from "../contextApi/sms/smsContextApi"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SendSms = () => {
  let { contact } = useParams()
  const { processSendPersonalSms } = useContext(SmsApiData)
  const [loading, setLoading] = useState(true)
  //   const [error, setError] = useState([])
  const [formData, setFormData] = useState({
    contact: contact,
    message: null,
  })

  useEffect(() => {
    // let data = memberList.filter((item) => item.contact == id)
    // console.log(data)
    setFormData({
      ...formData,
      contact: contact,
    })
    setLoading(false)
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    // imageUpload: formData.imageUpload || formData.image || "",
    processSendPersonalSms(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {"Send Sms"}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2 space-x-2 flex">
                  {ADDSMS.fieldDetail.map((item) => (
                    <InputField
                      field={item}
                      value={formData}
                      defaultVal={item.defaultValue}
                      change={(data, field) => {
                        handleInputChange(data, field)
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={"Send"} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default SendSms
