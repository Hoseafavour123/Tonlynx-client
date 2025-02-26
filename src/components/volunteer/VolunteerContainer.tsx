import { Navigate, Outlet } from 'react-router-dom'
import { useVolunteerAuthContext } from '../../context/VolunteerAuthContext'

const VolunteerContainer = () => {
  const { volunteer, isLoading } = useVolunteerAuthContext()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[90vh] w-full flex-col">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      </div>
    )
  }

  if (!volunteer) {
    return (
      <Navigate
        to="/volunteer/login"
        replace
        state={{
          redirectUrl: window.location.pathname,
        }}
      />
    )
  }

  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  )
}

export default VolunteerContainer
