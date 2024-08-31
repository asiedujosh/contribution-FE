import { useState, useContext, useEffect } from "react"
import { ADDMEMBER } from "../constant/memberConstant"
import SelectField from "../component/selectField"
import InputField from "../component/inputField"
import UploadImage from "../component/uploadImage"
import IdField from "../component/idField"
import SubmitBtn from "../component/submitButton"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import generateUniqueID from "../utils/generateId"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import CurtainPrompt from "../components/curtainPrompt"

const AddMember = () => {
  const { processAddMember } = useContext(MemberApiData)
  const [formData, setFormData] = useState({
    memberId: null,
    gender: "Male",
  })

  useEffect(() => {
    setFormData({ ...formData, memberId: generateUniqueID("ARF") })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = async () => {
    processAddMember(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDMEMBER.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2 space-x-2 flex">
                  {ADDMEMBER.fieldDetail.map((item) =>
                    item.name === "memberId" ? (
                      <IdField field={item} value={formData} />
                    ) : (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  )}
                </div>
                <div className="space-y-2 space-x-2 flex">
                  {ADDMEMBER.fieldDetail2.map((item) => {
                    return item.type === "select" ? (
                      <SelectField
                        key={item.id}
                        field={item}
                        value={formData}
                        options={item.options}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    ) : (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
                <div className="space-y-2 space-x-2 flex">
                  {ADDMEMBER.fieldDetail3.map((item) => {
                    return (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
                <div className="w-full">
                  <div className="space-y-2 flex w-full">
                    <UploadImage
                      change={(data, field) => {
                        handleInputChange(data, field)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDMEMBER.btnText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddMember
