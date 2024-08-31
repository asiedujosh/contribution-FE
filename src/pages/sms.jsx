import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SmsTableContainer from "../container/smsTableContainer"

const Sms = () => {
  return (
    <>
      <div>
        <SmsTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Sms
