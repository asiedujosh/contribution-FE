import { useState, useContext, useEffect } from "react"
import { SYSTEMINFO } from "../constant/systemSettingsConstant"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
import { SystemApiData } from "../contextApi/systemSetting/systemSettingContextApi"
import "react-toastify/dist/ReactToastify.css"
// import CurtainPrompt from "../components/curtainPrompt"

const AddSystemSetting = () => {
  const { processAddSetting } = useContext(SystemApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = async () => {
    processAddSetting(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {SYSTEMINFO.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2">
                  {SYSTEMINFO.fieldDetail.map((item) => {
                    return (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={SYSTEMINFO.btnText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}

export default AddSystemSetting
