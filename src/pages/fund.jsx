import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FundTableContainer from "../container/fundTableContainer"

const Fund = () => {
  return (
    <>
      <div>
        <FundTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Fund
