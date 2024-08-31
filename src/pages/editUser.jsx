import { useState, useContext, useEffect } from "react"
import { ADDUSER } from "../constant/loginConstant"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
import { UserApiData } from "../contextApi/users/userContextApi"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditUser = () => {
  let { id } = useParams()
  const { allUsers, processUpdateUser } = useContext(UserApiData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  const [formData, setFormData] = useState({
    id: id,
    firstName: null,
    lastName: null,
    email: null,
    gender: null,
    type: null,
    branchId: null,
  })

  useEffect(() => {
    let data = allUsers.filter((item) => item.id == id)
    // console.log(data)
    setFormData({
      ...formData,
      id: id,
      firstName: data[0].firstName,
      lastName: data[0].lastName,
      gender: data[0].gender,
      email: data[0].email,
      type: data[0].type,
      branchId: data[0].branchId,
      occupation: data[0].occupation,
      contact: data[0].contact,
      contactOne: data[0].contactOne,
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
    processUpdateUser(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDUSER.editTitle}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  {ADDUSER.fieldDetail.map((item) => {
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
              <SubmitBtn text={ADDUSER.editBtn} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditUser
