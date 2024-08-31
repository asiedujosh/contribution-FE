import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ParcelTableContainer from "../container/parcelTableContainer"

const Parcel = () => {
  return (
    <>
      <div>
        <ParcelTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Parcel
