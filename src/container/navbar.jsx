import React, { useContext } from "react"
import { NavbarLink } from "../constant/navbarConstant"
import { UserApiData } from "../contextApi/users/userContextApi"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { userProfile, processLogout } = useContext(UserApiData)

  let handleLogout = () => {
    // console.log("Logginout")
    processLogout()
  }

  return (
    <>
      <div class="mt-4 grid grid-cols-2">
        <div class="col-span-1 flex items-center ml-6 text-gray-500">
          <label for="" class="font-bold text-gray-500 font-md text-xl">
            Welcome {userProfile && userProfile.email}
          </label>
        </div>
        <div class="col-span-1 flex items-center justify-end px-4">
          {NavbarLink.map((item) =>
            item.link == "#" ? (
              <span
                onClick={() => handleLogout()}
                class="mx-4 cursor-pointer text-gray-500 hover:text-blue-200"
              >
                {item.icon}
              </span>
            ) : (
              <span class="mx-4 cursor-pointer text-gray-500 hover:text-blue-200">
                <Link to={item.link}>{item.icon}</Link>
              </span>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
