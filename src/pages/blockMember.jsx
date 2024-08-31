import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BlockMemberTableContainer from "../container/blockMemberTableContainer"

const BlockMember = () => {
  return (
    <>
      <div>
        <BlockMemberTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default BlockMember
