import { useState, useContext, useEffect } from "react"
import { ADDFUND } from "../constant/fundConstant"
import SelectField from "../component/selectField"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
import { FundApiData } from "../contextApi/fund/fundContextApi"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import { ContypeApiData } from "../contextApi/contype/contypeContextApi"
import { ContributionApiData } from "../contextApi/contribution/contributionContextApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CurtainPrompt from "../component/curtainPrompt"

const AddFund = () => {
  const { processAddFund } = useContext(FundApiData)
  const { reasonOption, allContribution, uniqueListOption } =
    useContext(ContributionApiData)
  const { contypeOptions } = useContext(ContypeApiData)
  const { memberIdOptions, memberNameOptions } = useContext(MemberApiData)
  const [prompt, setPrompt] = useState(false)
  const [formData, setFormData] = useState({
    memberId: null,
    reason: reasonOption[0],
    account: uniqueListOption[0].amount,
  })

  useEffect(() => {
    setFormData({
      ...formData,
      memberId: memberNameOptions[0],
      contributionId: contypeOptions[0],
    })
  }, [])

  const handleInputChange = (data, field) => {
    if (field == "reason") {
      let newAmount = uniqueListOption.find(
        (uniqueItem) => uniqueItem.reason == data
      ).amount
      // console.log(newAmount)
      setFormData({
        ...formData,
        reason: data,
        account: newAmount,
      })
    } else {
      setFormData({
        ...formData,
        [field]: data,
      })
    }
  }

  const handleClose = () => {
    setPrompt(false)
  }

  const handleSubmit = async () => {
    if (formData.account < formData.amount) {
      setPrompt((prev) => !prev)
    } else {
      let holdData = memberIdOptions.filter(
        (item) => item.name == formData.memberId
      )[0].id
      formData.memberId = holdData
      processAddFund(formData)
    }
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDFUND.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2">
                  {ADDFUND.fieldDetail.map((item) => {
                    return item.type === "select" ? (
                      <SelectField
                        key={item.id}
                        field={item}
                        value={formData}
                        options={
                          item.name === "reason"
                            ? reasonOption
                            : memberNameOptions
                        }
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    ) : (
                      <InputField
                        field={item}
                        value={formData}
                        account={item.name == "account" ? true : false}
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
              <SubmitBtn text={ADDFUND.btnText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {prompt && <CurtainPrompt noFunction={handleClose} />}
    </>
  )
}

export default AddFund
