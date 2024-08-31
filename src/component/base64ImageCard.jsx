import React from "react"

const BaseImage = ({ data }) => {
  return (
    <div className="">
      <img src={data} alt="Base64 Image" />;
    </div>
  )
}

export default BaseImage
