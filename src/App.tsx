import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VolunteerRegister from './pages/volunteer/authentication/Register'
import VolunteerLogin from './pages/volunteer/authentication/Login'
import VerifyVolunteerEmail from './pages/volunteer/authentication/VerifyEmail'
import VerifyEmailMessage from './pages/volunteer/authentication/VerifyMessage'
import ForgotPassword from './pages/volunteer/authentication/ForgotPassword'
import ResetPassword from './pages/volunteer/authentication/ResetPassword'
import VolunteerContainer from './components/volunteer/VolunteerContainer'
import { VolunteerAuthProvider } from './context/VolunteerAuthContext'
import VolunteerHome from './pages/volunteer/VolunteerHome'
import VolunteerProfile from './pages/volunteer/VolunteerProfile'
import VolunteerEdit from './pages/volunteer/VolunteerEdit'



import OrganisationRegister from './pages/organisation/authentication/Register'
import OrganisationLogin from './pages/organisation/authentication/Login'
import ForgotOrganisationPassword from './pages/organisation/authentication/ForgotPassword'
import ResetOrganisationPassword from './pages/organisation/authentication/ResetPassword'
import VerifyOrganisationEmail from './pages/organisation/authentication/VerifyEmail'
import VerifyOrganisationEmailMessage from './pages/organisation/authentication/VerifyMessage'
import OrganisationHome from './pages/organisation/OrganisationHome'
import { OrganisationAuthProvider } from './context/OrganisationAuthContext'
import OrganisationContainer from './components/organisation/OrganisationContainer'
import MainVolunteerLayout from './components/volunteer/MainLayout'
import MainOrganisationLayout from './components/organisation/MainLayout'
import OrganisationProfile from './pages/organisation/OrganisationProfile'
import OrganisationEdit from './pages/organisation/OrganisationEdit'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <VolunteerAuthProvider>
              <VolunteerContainer />
            </VolunteerAuthProvider>
          }
        >
          <Route element={<MainVolunteerLayout />}>
            <Route index element={<VolunteerHome />} />
            <Route path="/volunteer/profile" element={<VolunteerProfile />} />
            <Route path='/volunteer/profile/edit' element={<VolunteerEdit/>} />
          </Route>
        </Route>

        <Route path="/volunteer/register" element={<VolunteerRegister />} />
        <Route path="/volunteer/login" element={<VolunteerLogin />} />
        <Route path="/volunteer/password/forgot" element={<ForgotPassword />} />
        <Route path="/volunteer/password/reset" element={<ResetPassword />} />
        <Route
          path="/volunteer/verify-message"
          element={<VerifyEmailMessage />}
        />
        <Route
          path="/volunteer/email/verify/:code"
          element={<VerifyVolunteerEmail />}
        />

        <Route
          path="/organisation"
          element={
            <OrganisationAuthProvider>
              <OrganisationContainer />
            </OrganisationAuthProvider>
          }
        >
          <Route element={<MainOrganisationLayout/>}>
            <Route index element={<OrganisationHome />} />
            <Route path='/organisation/profile' element={<OrganisationProfile/>} />
            <Route path='/organisation/profile/edit' element={<OrganisationEdit/>} />
          </Route>
        </Route>

        <Route
          path="/organisation/register"
          element={<OrganisationRegister />}
        />
        <Route path="/organisation/login" element={<OrganisationLogin />} />
        <Route
          path="/organisation/password/forgot"
          element={<ForgotOrganisationPassword />}
        />
        <Route
          path="/organisation/password/reset"
          element={<ResetOrganisationPassword />}
        />
        <Route
          path="/organisation/verify-message"
          element={<VerifyOrganisationEmailMessage />}
        />
        <Route
          path="/organisation/email/verify/:code"
          element={<VerifyOrganisationEmail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App