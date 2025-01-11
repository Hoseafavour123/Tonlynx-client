import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import * as apiVolunteer from '../../../apiVolunteer'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

export type Activation = {
  otpString: string
}

const VerifyVolunteerEmail = () => {
  const { code } = useParams()

  const { isLoading, isSuccess, isError } = useQuery('verifyEmail', () => {
    if (code) {
      return apiVolunteer.verifyEmail(code)
    }
  })

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
        {isLoading && (
          <h1 className="text-gray-600 text-2xl font-semibold">Verifying...</h1>
        )}
        {isSuccess && (
          <div>
            <AiOutlineCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-green-600">
              Email Verified
            </h1>
            <p className="text-gray-600 mt-2">
              Your email has been successfully verified!
            </p>
            <p>
              <Link
                to="/volunteer/login"
                className="text-sm font-semibold text-blue-800"
              >
                Login
              </Link>
            </p>
          </div>
        )}
        {isError && (
          <div>
            <AiOutlineCloseCircle className="text-red-600 text-5xl mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-red-600">
              Invalid Verification Code
            </h1>
            <p className="text-gray-600 mt-2">
              The verification code you provided is invalid. Please try again.
            </p>
            <p>
              <Link
                to="/volunteer/password/reset"
                className="text-sm font-semibold text-blue-800"
              >
                Get new link
              </Link>
            </p>
            <p>
              <Link
                to="/"
                className="text-sm font-semibold text-blue-800"
              >
                Go to Home
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default VerifyVolunteerEmail
