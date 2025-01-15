import React, { useState, MouseEvent } from 'react'
import * as apiVolunteer from '../../../apiVolunteer'
import { useMutation } from 'react-query'
import { queryClient } from '../../../main'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../context/AppContext'
import { useVolunteerAuthContext } from '../../../context/VolunteerAuthContext'
import { Link } from 'react-router-dom'

const AvatarPopover: React.FC = () => {

  const {volunteer} = useVolunteerAuthContext()
  const navigate = useNavigate()
  const { showToast } = useAppContext()
  const { mutate: logout } = useMutation({
    mutationFn: apiVolunteer.logoutVolunteer,
    onSettled: () => {
      queryClient.clear()
      navigate('/volunteer/login', { replace: true })
    },
    onError: (err: Error) => {
      showToast({ message: err.message, type: 'ERROR' })
    },
  })

  const handleLogout = () => {
    logout()
  }

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div className="relative">
      {/* Avatar that triggers the popover */}
      <div
        className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full cursor-pointer"
        onClick={handleClick}
      >
        {volunteer?.imageInfo.imageUrl ? (
          <img src={volunteer?.imageInfo?.imageUrl} alt="" />
        ) : (
          'A'
        )}
      </div>

      {/* Popover content */}
      {open && (
        <div
          className="absolute mt-2 bg-black/70 backdrop-blur-lg text-white p-4 rounded-lg w-64 right-0 shadow-lg"
          onMouseLeave={handleClose}
        >
          {/* User Info */}
          <div className="mb-4">
            <h2 className="text-sm font-bold">
              {volunteer?.firstName} {volunteer?.lastName}
            </h2>
            <p className="text-xs text-gray-300">{volunteer?.email}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-500 my-4"></div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
            <button className="text-sm text-white w-full text-left px-2 py-1 hover:text-black hover:bg-white rounded">
              <Link to={'/volunteer/profile'} className="w-full">
                Profile
              </Link>
            </button>
            <button
              onClick={handleLogout}
              className="text-sm text-white w-full text-left px-2 py-1 hover:text-black hover:bg-white rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AvatarPopover
