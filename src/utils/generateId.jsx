const generateUniqueID = (prefix) => {
  const uniqueID = `${prefix}-${Math.floor(Math.random() * 1000000000)}`
  return uniqueID
}

export default generateUniqueID
