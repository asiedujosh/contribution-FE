import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Sidebar from "../container/sidebar"
import Navbar from "../container/navbar"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import { BranchesApiData } from "../contextApi/branches/branchesContextApi"
import { ContypeApiData } from "../contextApi/contype/contypeContextApi"
import { FundApiData } from "../contextApi/fund/fundContextApi"
import { ContributionApiData } from "../contextApi/contribution/contributionContextApi"
import { UserApiData } from "../contextApi/users/userContextApi"

const Dashboard = () => {
  const { isAuthenticated, processRetrieve } = useContext(UserApiData)
  const { processGetAllBranches } = useContext(BranchesApiData)
  const { processGetAllContype } = useContext(ContypeApiData)
  const { processCountMember, processGetAllMember } = useContext(MemberApiData)
  const { processCountFund, processSumFund } = useContext(FundApiData)
  const { processCountContribution, processSumContribution } =
    useContext(ContributionApiData)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      //navigate("/")
      //Dashboard try retreive
      let dataRetrieve = async () => {
        let auth = await processRetrieve()
        if (auth) {
          navigate("/dashboard")
        } else {
          navigate("/")
        }
      }
      dataRetrieve()
    }
  }, [isAuthenticated])

  useEffect(() => {
    processGetAllBranches()
    processGetAllContype()
    processGetAllMember()
    processCountMember()
    processCountContribution()
    processSumContribution()
    processCountFund()
    processSumFund()
  }, [])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
