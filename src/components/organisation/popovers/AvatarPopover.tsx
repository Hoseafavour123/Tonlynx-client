import React, { useState, MouseEvent } from 'react'
import * as apiOrganisation from '../../../apiOrganisation'
import { useMutation } from 'react-query'
import { queryClient } from '../../../main'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../context/AppContext'
import { Link } from 'react-router-dom'
import { useOrganisationAuthContext } from '../../../context/OrganisationAuthContext'

const AvatarPopover: React.FC = () => {
  const { organisation } = useOrganisationAuthContext()
  const navigate = useNavigate()
  const { showToast } = useAppContext()
  const { mutate: logout } = useMutation({
    mutationFn: apiOrganisation.logoutOrganisation,
    onSettled: () => {
      queryClient.clear()
      navigate('/organisation/login', { replace: true })
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
        className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full cursor-pointer"
        onClick={handleClick}
      >
        {organisation?.imageInfo.imageUrl ? (
          <img src={organisation?.imageInfo?.imageUrl} alt="" className='w-fit h-fit' />
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
              {organisation?.name}
            </h2>
            <p className="text-xs text-gray-300">{organisation?.email}</p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-500 my-4"></div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
            <button className="text-sm text-white w-full text-left px-2 py-1 hover:text-black hover:bg-white rounded">
              <Link to={'/organisation/profile'} className="w-full">
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
