import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ContributionTableContainer from "../container/contributionTableContainer"

const Contribution = () => {
  return (
    <>
      <div>
        <ContributionTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Contribution
