const SubmitBtn = ({ text, submit, color }) => {
  const handleSubmit = () => {
    submit()
  }

  return (
    <button
      className="my-2 h-10 w-full rounded-2xl border border-blue-500 text-blue-500 hover:border-gray-500 hover:text-gray-500"
      onClick={(e) => {
        handleSubmit(e)
      }}
    >
      {text}
    </button>
  )
}

export default SubmitBtn
