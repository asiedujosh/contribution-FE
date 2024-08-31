// components/TextInput.js
const IdField = ({ field, value }) => {
  return (
    <div className="my-2 w-full text-left ">
      <label className="text-sm text-gray-500">{field.label}</label>
      <input
        type={field.type}
        value={value[field.name]}
        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        readOnly
      />
    </div>
  )
}

export default IdField
