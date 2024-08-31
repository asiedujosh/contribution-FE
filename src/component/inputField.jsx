import React from "react"

const InputField = ({ field, value, change, errors, account }) => {
  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  return (
    <div className="my-2 w-full text-left ">
      <label className="text-sm text-gray-500">{field.label}</label>
      <input
        type={field.type}
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        placeholder={field.placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        readOnly={account}
      />
      {errors && errors.length !== 0 && (
        <p className="text-red-600 text-sm">*{errors.message}</p>
      )}
    </div>
  )
}

export default InputField
