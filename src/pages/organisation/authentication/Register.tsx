import React from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import * as apiOrganisation from '../../../apiOrganisation'
import { useAppContext } from '../../../context/AppContext'
import Select from 'react-select' // Import react-select

export interface RegisterFormData {
  name: string
  email: string
  address: string
  type: { value: string; label: string } | null// Updated type for the 'type' field
  password: string
  confirmPassword: string
}

const industries = [
  { value: 'Tech', label: 'Tech' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Education', label: 'Education' },
  { value: 'Finance', label: 'Finance' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Blockchain', label: 'Blockchain' },
  { value: 'AI/ML', label: 'AI/ML' },
  { value: 'GreenTech', label: 'GreenTech' },
  { value: 'Cybersecurity', label: 'Cybersecurity' },
  { value: 'SocialImpact', label: 'Social Impact' },
]

const OrganisationRegister: React.FC = () => {
  const navigate = useNavigate()
  const { showToast } = useAppContext()
  const { mutate, isLoading } = useMutation(
    apiOrganisation.registerOrganisation,
    {
      onSuccess: () => {
        navigate('/organisation/verify-message', { replace: true })
      },
      onError: (err: Error) => {
        showToast({ message: err.message, type: 'ERROR' })
      },
    }
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control, // Use control for react-select integration
  } = useForm<RegisterFormData>()

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
   
    console.log(data)
    mutate(data)
  }

  const password = watch('password')

  return (
    <div className="font-montserrat mx-auto flex max-md:flex-col justify-center items-center gap-5 min-h-screen">
      <div className="md:w-[30%]">
        <h1 className="text-6xl max-md:text-4xl font-semibold">Tonlynx</h1>
        <p>Empower change, touch a life...</p>
      </div>

      <div className="md:w-[30%] mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Organisation Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Organisation Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organisation Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
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

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              {...register('address', { required: 'Address is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.address && (
              <p className="mt-2 text-sm text-red-600">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Industry (Searchable Dropdown) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <Controller
              control={control} // Use control to link the select with react-hook-form
              name="type"
              render={({ field }) => (
                <Select
                  {...field} // Spread the field values to react-select
                  options={industries}
                  isSearchable
                  className="mt-2"
                  placeholder="Search and select an industry"
                  {...register('type')} // Register the field with react-hook-form
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption) // Ensure the value is correctly updated in react-hook-form
                  }}
                  value={field.value ? field.value : null} // Ensure the field value is set to null if no selection
                />
              )}
              rules={{ required: 'Industry is required' }} // Validation rule
            />
            {errors.type && (
              <p className="mt-2 text-sm text-red-600">{errors.type.message}</p>
            )}
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isLoading}
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 focus:ring-indigo-500 hover:bg-indigo-700 '
            }  focus:outline-none focus:ring-2 focus:ring-offset-2 `}
          >
            {isLoading ? 'Processing...' : 'Register'}
          </button>

          {/* Already Registered Link */}
          <p className="text-sm">
            Already in?{' '}
            <span className=" text-indigo-500">
              <Link to={'/organisation/login'}>Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default OrganisationRegister
