import React from "react"
import { spinnerImage } from "../constant/imageConstant"

const Loading = () => {
  return (
    <div
      id="overlay"
      className="fixed bg-black bg-opacity-50 inset-0 z-40 flex justify-center items-center"
    >
      <div className="bg-gray-200 max-w-sm py-2 px-3 rounded shadow-xl">
        <div>
          <span className="font-3xl">
            <img src={spinnerImage} className="h-10 w-10" alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Loading
