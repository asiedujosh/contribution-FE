import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ActiveMemberTableContainer from "../container/activeMemberTableContainer"

const ActiveMember = () => {
  return (
    <>
      <div>
        <ActiveMemberTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default ActiveMember
