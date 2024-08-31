import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BranchTableContainer from "../container/branchTableContainer"

const Branch = () => {
  return (
    <>
      <div>
        <BranchTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Branch
