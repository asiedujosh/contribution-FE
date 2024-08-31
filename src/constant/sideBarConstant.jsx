import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGauge,
  faUsers,
  faPlus,
  faList,
  faHandHoldingDollar,
  faCircleDollarToSlot,
  faUser,
  faMessage,
  faCaretDown,
  faCaretUp,
  faCodeBranch,
  faFile,
} from "@fortawesome/free-solid-svg-icons"

let iconSizes = "w-6 h-6 mr-2"
let dropIconSize = "w-4 h-4"

export const dropIcons = {
  up: <FontAwesomeIcon icon={faCaretUp} className={dropIconSize} />,
  down: <FontAwesomeIcon icon={faCaretDown} className={dropIconSize} />,
}

export const sideBarLink = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: <FontAwesomeIcon icon={faGauge} className={iconSizes} />,
    subLink: [],
  },
  {
    id: 2,
    title: "Member",
    icon: <FontAwesomeIcon icon={faUsers} className={iconSizes} />,
    subLink: [
      {
        id: 1,
        title: "Add New",
        link: "/dashboard/addMember",
        icon: <FontAwesomeIcon icon={faPlus} className={iconSizes} />,
      },
      {
        id: 2,
        title: "Active List",
        link: "/dashboard/activeMember",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
      {
        id: 3,
        title: "Blocked List",
        link: "/dashboard/blockMember",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
    ],
  },
  {
    id: 3,
    title: "Contribution Type",
    icon: <FontAwesomeIcon icon={faCodeBranch} className={iconSizes} />,
    subLink: [
      {
        id: 1,
        title: "Add",
        link: "/dashboard/addContype",
        icon: <FontAwesomeIcon icon={faPlus} className={iconSizes} />,
      },
      {
        id: 2,
        title: "List",
        link: "/dashboard/contype",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
    ],
  },
  {
    id: 4,
    title: "Contribution",
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} className={iconSizes} />,
    subLink: [
      {
        id: 1,
        title: "Add New",
        link: "/dashboard/addContribution",
        icon: <FontAwesomeIcon icon={faPlus} className={iconSizes} />,
      },
      {
        id: 2,
        title: "List",
        link: "/dashboard/contribution",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
    ],
  },
  {
    id: 5,
    title: "Fund",
    icon: <FontAwesomeIcon icon={faCircleDollarToSlot} className={iconSizes} />,
    subLink: [
      {
        id: 1,
        title: "Add New",
        link: "/dashboard/addFund",
        icon: <FontAwesomeIcon icon={faPlus} className={iconSizes} />,
      },
      {
        id: 2,
        title: "List",
        link: "/dashboard/fund",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
    ],
  },
  {
    id: 6,
    title: "Users",
    icon: <FontAwesomeIcon icon={faUser} className={iconSizes} />,
    subLink: [
      {
        id: 1,
        title: "Add New",
        link: "/dashboard/addUser",
        icon: <FontAwesomeIcon icon={faPlus} className={iconSizes} />,
      },
      {
        id: 2,
        title: "List",
        link: "/dashboard/user",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
    ],
  },
  {
    id: 7,
    title: "SMS",
    icon: <FontAwesomeIcon icon={faMessage} className={iconSizes} />,
    subLink: [
      {
        id: 1,
        title: "Add New",
        link: "/dashboard/addSms",
        icon: <FontAwesomeIcon icon={faPlus} className={iconSizes} />,
      },
      {
        id: 2,
        title: "List",
        link: "/dashboard/sms",
        icon: <FontAwesomeIcon icon={faList} className={iconSizes} />,
      },
    ],
  },
  {
    id: 8,
    title: "Reports",
    link: "/dashboard",
    icon: <FontAwesomeIcon icon={faFile} className={iconSizes} />,
    subLink: [],
  },
]
