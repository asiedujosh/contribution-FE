import axios from "../../utils/axios.config"
import { LISTALL, LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addMember = async (data) => {
  try {
    let responseOnAddMember = await axios.post("/api/storeMember", data)
    if (responseOnAddMember) {
      if (responseOnAddMember.status === SUCCESS_STATUS) {
        return responseOnAddMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchActiveMember = async (data) => {
  try {
    let responseOnSearchActiveMember = await axios.get(
      `/api/searchActiveMember?keyword=${data}`
    )
    if (responseOnSearchActiveMember) {
      if (responseOnSearchActiveMember.status === SUCCESS_STATUS) {
        return responseOnSearchActiveMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchBlockMember = async (data) => {
  try {
    let responseOnSearchBlockMember = await axios.get(
      `/api/searchActiveMember?keyword=${data}`
    )
    if (responseOnSearchBlockMember) {
      if (responseOnSearchBlockMember.status == SUCCESS_STATUS) {
        return responseOnSearchBlockMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const countMember = async () => {
  try {
    let responseOnCountMember = await axios.get("/api/countMember")
    if (responseOnCountMember) {
      if (responseOnCountMember.status === SUCCESS_STATUS) {
        return responseOnCountMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllMember = async () => {
  try {
    let responseOnAllMember = await axios.get("/api/getAllMember")
    if (responseOnAllMember) {
      if (responseOnAllMember.status === SUCCESS_STATUS) {
        return responseOnAllMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllActiveMember = async (data) => {
  try {
    let responseOnGetAllActiveMember = await axios.get(
      `/api/getAllActiveMember?page=${data}&perPage=${LISTALL}`
    )
    if (responseOnGetAllActiveMember) {
      if (responseOnGetAllActiveMember.status === SUCCESS_STATUS) {
        return responseOnGetAllActiveMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllBlockMember = async (data) => {
  try {
    let responseOnGetAllDeactiveMember = await axios.get(
      `/api/getAllDeactiveMember?page=${data}&perPage=${LISTALL}`
    )
    if (responseOnGetAllDeactiveMember) {
      if (responseOnGetAllDeactiveMember.status === SUCCESS_STATUS) {
        return responseOnGetAllDeactiveMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editMember = async (data) => {
  try {
    let responseOnEditMember = await axios.put(
      `/api/updateMember/${data.id}`,
      data
    )
    if (responseOnEditMember) {
      if (responseOnEditMember.status === SUCCESS_STATUS) {
        return responseOnEditMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const blockMember = async (data) => {
  try {
    let responseOnBlockMember = await axios.put(
      `/api/blockMember/${data.id}`,
      data
    )
    if (responseOnBlockMember) {
      if (responseOnBlockMember.status === SUCCESS_STATUS) {
        return responseOnBlockMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteMember = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteMember = await axios.delete(
      `/api/deleteMember/${data.id}`
    )

    if (responseOnDeleteMember) {
      if (responseOnDeleteMember.status === SUCCESS_STATUS) {
        return responseOnDeleteMember.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
