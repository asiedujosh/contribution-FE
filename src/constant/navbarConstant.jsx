import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

let iconSizes = "w-6 h-6"

export const NavbarLink = [
  {
    link: "/settings",
    icon: <FontAwesomeIcon icon={faGear} className={iconSizes} />,
  },
  {
    link: "#",
    icon: <FontAwesomeIcon icon={faRightFromBracket} className={iconSizes} />,
  },
]
