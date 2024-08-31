import React from "react"
import SubmitBtn from "./submitButton"

const CurtainPrompt = ({ noFunction }) => {
  return (
    <div
      id="overlay"
      className="fixed bg-black bg-opacity-50 inset-0 z-40 flex justify-center items-center"
    >
      <div className="bg-gray-200 max-w-sm py-2 px-3 rounded shadow-xl">
        <div>
          <span className="font-3xl text-xl">Notice</span>
          <p>You don't have enough funds</p>
          <div className="flex space-x-2 my-4">
            <SubmitBtn text="Ok" submit={noFunction} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurtainPrompt
