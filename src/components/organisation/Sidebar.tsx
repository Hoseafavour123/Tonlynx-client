import { useState } from 'react'
{
  /*import {
  OverviewLinks,
  StaffManagementLinks,
} from '../Lib/Constants/Navigation'*/
}
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { IoStatsChart } from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'

type SidebarProps = {
  isOpen: boolean
  toggleSidebar: () => void
}

const linkClass =
  ' p-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-md text-sm'

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  {
    /*const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false)

  const toggleOverview = () => {
    setIsOverviewOpen(!isOverviewOpen)
  }

  const [isStaffManagementOpen, SetIsStaffManagementOpen] =
    useState<boolean>(false)

  const toggleStaffManagemet = () => {
    SetIsStaffManagementOpen(!isStaffManagementOpen)
  } */
  }

  return (
    <div className="flex h-screen fixed z-30 text-white">
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#0D0D12] transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="h-full p-4 text-white">
          <div className="flex justify-between items-center mb-10">
           <Link to={'/organisation'}  className='text-3xl font-bold'>Tonzai</Link>
            <button onClick={toggleSidebar} className="lg:hidden">
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex-1">
            <div className="my-4 px-2">
              <p className="font-semibold text-lg mb-4">Main menu</p>
              <div className="flex flex-col gap-4">
                {/*<div>
                  <button
                    onClick={toggleOverview}
                    className="flex items-center bg-[#1E1E27] p-3 rounded-md font-medium text-sm justify-between w-full text-left focus:outline-none"
                  >
                    <IoStatsChart size={20} />
                    <p className="">Overview</p>

                    <span>
                      {isOverviewOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>

                  {isOverviewOpen && (
                    <div className="flex flex-col gap-2 p-3 bg-[#0A0A0F] rounded-b-lg">
                      {OverviewLinks.map((item) => (
                        <SidebarLinks
                          key={item.key}
                          item={item}
                          toggleSidebar={toggleSidebar}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={toggleStaffManagemet}
                    className="flex items-center bg-[#1E1E27] p-3 rounded-md text-sm font-medium justify-between w-full text-left focus:outline-none"
                  >
                    <FiUsers size={20} />
                    <p className="">Staff Management</p>

                    <span>
                      {isStaffManagementOpen ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>

                  {isStaffManagementOpen && (
                    <div className="flex flex-col gap-2 p-3 bg-[#0A0A0F] rounded-b-lg">
                      {StaffManagementLinks.map((item) => (
                        <SidebarLinks
                          key={item.key}
                          item={item}
                          toggleSidebar={toggleSidebar}
                        />
                      ))}
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

type sideBarlinksprops = {
  item: {
    label: string
    path: string
  }
  toggleSidebar: () => void
}

function SidebarLinks({ item, toggleSidebar }: sideBarlinksprops) {
  const { pathname } = useLocation()

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'bg-neutral-700 text-white font-semibold'
          : 'text-neutral-400',
        linkClass
      )}
      onClick={toggleSidebar}
    >
      {item.label}
    </Link>
  )
}

export default Sidebar
