import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UserTableContainer from "../container/userTableContainer"

const User = () => {
  return (
    <>
      <div>
        <UserTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default User
