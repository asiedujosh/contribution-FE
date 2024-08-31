import { useState, useContext, useEffect } from "react"
import { ADDPARCELS } from "../constant/parcelConstant"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
// import LoadingBtn from "../components/loadingButton"
import { ParcelApiData } from "../contextApi/parcel/parcelContextApi"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditParcel = () => {
  let { id } = useParams()
  const { parcelList, processUpdateParcel } = useContext(ParcelApiData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  const [formData, setFormData] = useState({
    id: id,
    referenceNumber: null,
    senderName: null,
    senderAddress: null,
    senderContact: null,
    receipientName: null,
    receipientAddress: null,
    receipientContact: null,
    type: null,
    fromBranchId: null,
    toBranchId: null,
    weight: null,
    height: null,
    width: null,
    length: null,
    price: null,
    status: null,
  })

  useEffect(() => {
    let data = parcelList.filter((item) => item.id == id)
    // console.log(data)
    setFormData({
      ...formData,
      id: id,
      referenceNumber: data[0].referenceNumber,
      senderName: data[0].senderName,
      senderAddress: data[0].senderAddress,
      senderContact: data[0].senderContact,
      receipientName: data[0].receipientName,
      receipientAddress: data[0].receipientAddress,
      receipientContact: data[0].receipientContact,
      type: data[0].type,
      fromBranchId: data[0].fromBranchId,
      toBranchId: data[0].toBranchId,
      weight: data[0].weight,
      height: data[0].height,
      width: data[0].width,
      length: data[0].length,
      price: data[0].price,
      status: data[0].status,
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
    processUpdateParcel(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDPARCELS.editTitle}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  {ADDPARCELS.fieldDetail.map((item) => {
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
              <SubmitBtn text={ADDPARCELS.editBtn} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditParcel
