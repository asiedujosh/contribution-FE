import React, { useState } from "react"
import { sideBarLink, dropIcons } from "../constant/sideBarConstant"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [active, setActive] = useState(1)
  const [expanded, setExpanded] = useState(null)

  const handleToggle = (id) => {
    setActive(id)
    setExpanded(expanded === id ? null : id)
  }

  return (
    <div className="col-span-1 bg-white">
      <ul>
        {sideBarLink.map((item) => {
          if (item.subLink.length > 0) {
            return (
              <React.Fragment key={item.id}>
                <span
                  className={`${
                    item.id === active
                      ? "bg-blue-100 hover:bg-blue-200"
                      : "border-gray-200 hover:bg-gray-100"
                  } flex h-20 cursor-pointer items-center px-20 shadow-sm `}
                  onClick={() => handleToggle(item.id)}
                >
                  <span className="mr-2 text-gray-500">{item.icon}</span>
                  <span className="text-gray-500">{item.title}</span>
                  {expanded === item.id ? (
                    <span className="ml-2 text-gray-500">{dropIcons.up}</span>
                  ) : (
                    <span className="ml-2 text-gray-500">{dropIcons.down}</span>
                  )}
                </span>
                {expanded === item.id && (
                  <div className="w-full px-30 flex justify-center items-center">
                    <ul className="">
                      {item.subLink.map((subItem) => (
                        <>
                          <Link
                            to={subItem.link}
                            className="flex h-20 items-center px-5 hover:bg-blue-200"
                            key={subItem.id}
                          >
                            <span className="mr-2 text-gray-500">
                              {subItem.icon}
                            </span>
                            <span className="text-gray-500">
                              {subItem.title}
                            </span>
                          </Link>
                          <hr />
                        </>
                      ))}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            )
          } else {
            return (
              <Link
                to={item.link}
                key={item.id}
                className={`${
                  item.id === active
                    ? "bg-blue-100 hover:bg-blue-200"
                    : "border-gray-200 hover:bg-gray-100"
                } flex h-20 cursor-pointer items-center px-20 shadow-sm `}
                onClick={() => setActive(item.id)}
              >
                <span className="mr-2 text-gray-500">{item.icon}</span>
                <span className="text-gray-500">{item.title}</span>
              </Link>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default Sidebar
