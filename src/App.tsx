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
          <Route index element={<VolunteerHome />} />
        </Route>



        <Route path="/volunteer/register" element={<VolunteerRegister />} />
        <Route path="/volunteer/login" element={<VolunteerLogin />} />
        <Route
          path="/volunteer/verify-message"
          element={<VerifyEmailMessage />}
        />
        <Route path="/volunteer/password/forgot" element={<ForgotPassword />} />
        <Route path="/volunteer/password/reset" element={<ResetPassword />} />
        <Route
          path="/volunteer/email/verify/:code"
          element={<VerifyVolunteerEmail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
