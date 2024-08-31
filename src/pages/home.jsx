import React, { useContext } from "react"
import { HOMECONSTANT } from "../constant/homeConstant"
import { FundApiData } from "../contextApi/fund/fundContextApi"
import { ContributionApiData } from "../contextApi/contribution/contributionContextApi"
import { MemberApiData } from "../contextApi/member/memberContextApi"
import Card from "../component/card"

const Home = () => {
  const { sumFundState, noOfFund } = useContext(FundApiData)
  const { sumContributionState, noOfContribution } =
    useContext(ContributionApiData)

  const { noOfMember } = useContext(MemberApiData)

  return (
    <>
      <div className="flex space-x-4">
        {HOMECONSTANT.fieldOne.map((item) => (
          <Card
            icon={item.icon}
            number={
              item.type === "countMember"
                ? noOfMember
                : item.type === "totalContribution"
                ? sumContributionState
                : item.type === "countContribution"
                ? noOfContribution
                : item.type === "countFund"
                ? noOfFund
                : item.type === "totalFund"
                ? sumFundState
                : item.type === "balance"
                ? sumContributionState - sumFundState
                : undefined
            }
            link={item.link}
            view={item.view}
            label={item.title}
          />
        ))}
      </div>
      <div className="flex space-x-4 mt-4">
        {HOMECONSTANT.fieldTwo.map((item) => (
          <Card
            icon={item.icon}
            number={
              item.type === "countMember"
                ? noOfMember
                : item.type === "totalContribution"
                ? sumContributionState
                : item.type === "countContribution"
                ? noOfContribution
                : item.type === "countFund"
                ? noOfFund
                : item.type === "totalFund"
                ? sumFundState
                : item.type === "balance"
                ? sumContributionState - sumFundState
                : undefined
            }
            link={item.link}
            view={item.view}
            label={item.title}
          />
        ))}
      </div>
    </>
  )
}

export default Home
