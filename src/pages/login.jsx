import React, { useState, useContext, useEffect } from "react"
import { UserApiData } from "../contextApi/users/userContextApi"
import { useNavigate } from "react-router-dom"
import { homeSupport } from "../constant/imageConstant"
import InputField from "../component/inputField"
import { LOGINSYSTEM, WELCOME } from "../constant/loginConstant"
import SubmitBtn from "../component/submitButton"

const Login = () => {
  const { processLogin, isLoading, setIsLoading, isAuthenticated, loginError } =
    useContext(UserApiData)
  const [formData, setFormData] = useState({})
  const [error, setError] = useState([])

  const navigate = useNavigate()

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }, [isAuthenticated])

  //Check if all fields are enteres
  let checkError = () => {
    let err = []
    LOGINSYSTEM.fieldDetail.map((item) => {
      if (!formData[item.name]) {
        err.push({
          id: item.name,
          message: `${item.label} should not be empty`,
        })
      }
    })

    return err
  }

  const handleSubmit = async () => {
    setError([])
    let checkResult = await checkError()
    if (checkResult.length > 0) {
      setError(checkResult)
    } else {
      processLogin(formData)
    }
  }

  return (
    <>
      <main className="container mx-auto md:flex items-center justify-center">
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <div className="z-20 mt-10">
            <span className="block text-3xl font-bold text-blue-500">
              {WELCOME.title}
            </span>
            <img src={homeSupport} alt="" className="w-26" />
          </div>
        </div>

        <div className="flex justify-center items-center my-2 mt-10 md:hidden">
          <div className="z-20">
            <div className="w-10 border rounded-2xl border-gray-100 bg-blue-200 h-10 flex justify-center items-center  ml-36">
              <img src={homeSupport} alt="" className="w-26" />
            </div>
            <div className="z-20 h-24 w-80 justify-center py-2 rounded-2xl border border-gray-100 bg-blue-200 mt-2">
              <label className=" text-gray-500 flex items-center justify-center">
                {WELCOME.title}
              </label>
            </div>
          </div>
        </div>

        <div className="flex md:h-screen flex-1 md:items-center justify-center">
          <div className="z-20 flex py-6 w-80 justify-center rounded-2xl border border-gray-100 bg-white">
            <div className="w-100">
              <div className="my-5">
                <h4 className="font-bold text-gray-500">{LOGINSYSTEM.title}</h4>
                {loginError && (
                  <p class="text-red-600 text-sm">Wrong Username / Password</p>
                )}
                {LOGINSYSTEM.fieldDetail.map((item) => (
                  <InputField
                    field={item}
                    value={formData}
                    errors={error.find((original) => original.id == item.name)}
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                ))}

                <span className="my-2 text-blue-500">Forgot Password?</span>

                <div className="my-2">
                  <SubmitBtn text={LOGINSYSTEM.btnText} submit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Loading /> */}
      </main>
    </>
  )
}

export default Login
