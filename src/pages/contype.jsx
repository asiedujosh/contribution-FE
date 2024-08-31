import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ContypeTableContainer from "../container/contypeTableContainer"

const Contype = () => {
  return (
    <>
      <div>
        <ContypeTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Contype
