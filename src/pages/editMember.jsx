import { useState, useContext, useEffect } from "react"
import { ADDMEMBER } from "../constant/memberConstant"
import IdField from "../component/idField"
import SelectField from "../component/selectField"
import UploadImage from "../component/uploadImage"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
// import LoadingBtn from "../components/loadingButton"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditMember = () => {
  let { id } = useParams()
  const { allMembers, processUpdateMember } = useContext(MemberApiData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  const [formData, setFormData] = useState({
    id: id,
    memberId: null,
    firstName: null,
    middleName: null,
    lastName: null,
    gender: null,
    DOB: null,
    address: null,
    email: null,
    occupation: null,
    contact: null,
    contactOne: null,
  })

  useEffect(() => {
    let data = allMembers.filter((item) => item.id == id)
    // console.log(data)
    setFormData({
      ...formData,
      id: id,
      memberId: data[0].memberId,
      firstName: data[0].firstName,
      middleName: data[0].middleName,
      lastName: data[0].lastName,
      DOB: data[0].DOB,
      gender: data[0].gender === "1" ? "Male" : "Female",
      address: data[0].address,
      email: data[0].email,
      occupation: data[0].occupation,
      contact: data[0].contact,
      contactOne: data[0].contactOne,
      imageUpload: data[0].picture,
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
    processUpdateMember(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDMEMBER.editTitle}
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
                        defaultVal={item.defaultValue}
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
                <div>
                  <UploadImage
                    imagePreview={formData.imageUpload}
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDMEMBER.editBtn} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditMember
