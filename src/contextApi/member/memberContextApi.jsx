import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllMember,
  addMember,
  searchActiveMember,
  searchBlockMember,
  blockMember,
  getAllActiveMember,
  getAllBlockMember,
  editMember,
  deleteMember,
  countMember,
} from "./member"

export const MemberApiData = createContext()

const MemberApiDataProvider = (props) => {
  const [allMembers, setAllMembers] = useState([])
  const [activeMemberList, setActiveMemberList] = useState([])
  const [blockMemberList, setBlockMemberList] = useState([])
  const [memberIdOptions, setMemberIdOptions] = useState([])
  const [memberNameOptions, setMemberNameOptions] = useState([])
  const [searchActiveMemberRecord, setSearchActiveMemberRecord] = useState([])
  const [searchBlockMemberRecord, setSearchBlockMemberRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [noOfMember, setNoOfMember] = useState(0)
  const [paginationData, setPaginationData] = useState()

  const processSearchActiveMember = async (data) => {
    let responseOnSearchActiveMember = await searchActiveMember(data)
    if (responseOnSearchActiveMember) {
      setSearchActiveMemberRecord(responseOnSearchActiveMember.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processSearchBlockMember = async (data) => {
    let responseOnSearchBlockMember = await searchBlockMember(data)
    if (responseOnSearchBlockMember) {
      setSearchBlockMemberRecord(responseOnSearchBlockMember.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllMember = async () => {
    let response = await getAllMember()
    if (response) {
      setAllMembers(response.data.data)
      let dummy = []
      let onlyName = []
      let data
      response.data.data.map((item) => {
        data =
          item.firstName +
          " " +
          (item.middleName !== null ? item.middleName : "") +
          " " +
          item.lastName +
          " || " +
          item.contact
        dummy.push({
          id: item.memberId,
          name: data,
        })

        onlyName.push(data)
      })
      setMemberIdOptions(dummy)
      setMemberNameOptions(onlyName)
    }
  }

  const processGetAllActiveMember = async (data) => {
    let response = await getAllActiveMember(data || 1)
    if (response) {
      setActiveMemberList(response.data.data.data)
      setPaginationData(response.data.pagination)
      // Add for contype options
      // let dummy = []
      // response.data.data.data.map((item) => dummy.push(item.memberId))
      // setMemberIdOptions(dummy)
    }
  }

  const processGetAllBlockMember = async (data) => {
    let response = await getAllBlockMember(data || 1)
    if (response) {
      setBlockMemberList(response.data.data.data)
      setPaginationData(response.data.pagination)
      // Add for contype options
      // let dummy = []
      // response.data.data.data.map((item) => dummy.push(item.memberId))
      // setMemberIdOptions(dummy)
    }
  }

  const processCountMember = async () => {
    let response = await countMember()
    if (response) {
      setNoOfMember(response.data.data)
    }
  }

  const processAddMember = async (data) => {
    let response = await addMember(data)
    if (response) {
      processCountMember()
      processGetAllMember()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateMember = async (data) => {
    let response = await editMember(data)
    if (response) {
      processGetAllMember()
      processGetAllActiveMember()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processBlockMember = async (data) => {
    let response = await blockMember(data)
    if (response) {
      processGetAllMember()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteMember = async (data) => {
    // console.log(data)
    let response = await deleteMember(data)
    if (response) {
      processGetAllMember()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <MemberApiData.Provider
      value={{
        processSearchActiveMember,
        processGetAllActiveMember,
        processGetAllBlockMember,
        processGetAllMember,
        processSearchBlockMember,
        processAddMember,
        processUpdateMember,
        processBlockMember,
        processDeleteMember,
        activeMemberList,
        blockMemberList,
        allMembers,
        noOfMember,
        processCountMember,
        searchActiveMemberRecord,
        searchBlockMemberRecord,
        searchPaginationData,
        paginationData,
        memberIdOptions,
        memberNameOptions,
      }}
    >
      {props.children}
    </MemberApiData.Provider>
  )
}

export default MemberApiDataProvider
