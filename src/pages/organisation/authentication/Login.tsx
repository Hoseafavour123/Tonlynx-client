import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as apiOrganisation from '../../../apiOrganisation'
import { useMutation } from 'react-query'
import { useAppContext } from '../../../context/AppContext'

export interface LoginFormData {
  email: string
  password: string
}

const OrganisationLogin: React.FC = () => {
  const { showToast } = useAppContext()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  const { mutate, isLoading } = useMutation(apiOrganisation.loginOrganisation, {
    onSuccess: () => {
      navigate('/organisation', { replace: true })
    },
    onError: (err: Error) => {
      showToast({ message: err.message, type: 'ERROR' })
    },
  })

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    mutate(data)
  }

  return (
    <div className="font-montserrat mx-auto flex max-md:flex-col justify-center items-center gap-5  min-h-screen">
      <div className="md:w-[30%]">
        <h1 className="text-6xl max-md:text-4xl font-semibold">Tonlynx</h1>
        <p>Empower change, touch a life...</p>
      </div>

      <div className="md:w-[30%] mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Organisation Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className=" text-sm text-right text-indigo-500">
            <Link to={'/organisation/password/forgot'}>Forgot password?</Link>
          </p>
          <button
            disabled={isLoading}
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 focus:ring-indigo-500 hover:bg-indigo-700 '
            }  focus:outline-none focus:ring-2 focus:ring-offset-2 `}
          >
            {isLoading ? 'Processing...' : 'Login'}
          </button>
          <p className="text-sm">
            New here?{' '}
            <span className=" text-indigo-500">
              <Link to={'/organisation/register'}>Register Organisation</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default OrganisationLogin
