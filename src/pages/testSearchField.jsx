// App.js
import React from "react"
import SearchSelect from "../component/SearchSelect"

const TestSearch = () => {
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Honeydew",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SearchSelect options={options} placeholder="Select a fruit" />
    </div>
  )
}

export default TestSearch
