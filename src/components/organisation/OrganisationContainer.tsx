import { Navigate, Outlet } from 'react-router-dom'
import { useOrganisationAuthContext } from '../../context/OrganisationAuthContext'

const OrganisationContainer = () => {
  const { organisation, isLoading } = useOrganisationAuthContext()

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[90vh] w-full flex-col">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      </div>
    )
  }

  // Redirect to login if no volunteer is authenticated
  if (!organisation) {
    return (
      <Navigate
        to="/organisation/login"
        replace
        state={{
          redirectUrl: window.location.pathname,
        }}
      />
    )
  }

  // Render the Outlet if volunteer is authenticated
  return (
    <div className="min-h-screen">
      {/* <UserMenu /> */}
      <Outlet />
    </div>
  )
}

export default OrganisationContainer
