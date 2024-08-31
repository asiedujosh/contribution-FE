// SearchSelect.js
import React, { useState } from "react"

const SearchSelect = ({ options, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOption, setSelectedOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    setSearchTerm("")
  }

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative w-64">
      <div
        className="border border-gray-300 rounded-md p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption : placeholder}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <input
            type="text"
            className="w-full border-b border-gray-300 p-2"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <ul className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchSelect
