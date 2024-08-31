import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsers,
  faHandHoldingDollar,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons"

let iconSizes = "w-8 h-8 mr-2"

export const HOMECONSTANT = {
  fieldOne: [
    {
      id: 1,
      title: "Total Members",
      type: "countMember",
      view: true,
      link: "/dashboard/member",
      icon: <FontAwesomeIcon icon={faUsers} className={iconSizes} />,
    },
    {
      id: 2,
      title: "Total Contribution Amount",
      type: "totalContribution",
      view: false,
      icon: (
        <FontAwesomeIcon icon={faHandHoldingDollar} className={iconSizes} />
      ),
    },
    {
      id: 2,
      title: "Total Contribution",
      type: "countContribution",
      view: true,
      link: "/dashboard/contribution",
      icon: (
        <FontAwesomeIcon icon={faCircleDollarToSlot} className={iconSizes} />
      ),
    },
  ],
  fieldTwo: [
    {
      id: 1,
      title: "Total Fund Given",
      type: "countFund",
      view: true,
      link: "/dashboard/fund",
      icon: (
        <FontAwesomeIcon icon={faCircleDollarToSlot} className={iconSizes} />
      ),
    },
    {
      id: 2,
      title: "Total Fund Amount",
      type: "totalFund",
      view: false,
      icon: (
        <FontAwesomeIcon icon={faCircleDollarToSlot} className={iconSizes} />
      ),
    },
    {
      id: 2,
      title: "Balance",
      type: "balance",
      view: false,
      icon: (
        <FontAwesomeIcon icon={faCircleDollarToSlot} className={iconSizes} />
      ),
    },
  ],
}
