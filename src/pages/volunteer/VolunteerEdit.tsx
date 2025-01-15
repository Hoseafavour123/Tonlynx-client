import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as apiVolunteer from '../../apiVolunteer'
import { useAppContext } from '../../context/AppContext'
import { useVolunteerAuthContext } from '../../context/VolunteerAuthContext'

export interface EditFormData {
  firstName: string
  lastName: string
  email: string
  about: string
  password:string
  jobTitle:string
  profileImage: FileList | null
}

const VolunteerEdit: React.FC = () => {
  const { volunteer } = useVolunteerAuthContext()
  const { showToast } = useAppContext()
  const { mutate, isLoading } = useMutation(apiVolunteer.updateVolunteer, {
    onSuccess: () => {
      showToast({ message: 'Profile updated successfully', type: 'SUCCESS' })
      window.location.reload()
    },
    onError: (err: Error) => {
      showToast({ message: err.message, type: 'ERROR' })
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormData>({
    defaultValues: {
      firstName: volunteer?.firstName || '',
      lastName: volunteer?.lastName || '',
      email: volunteer?.email || '',
      about: volunteer?.about || '',
      jobTitle: volunteer?.jobTitle || ''
    },
  })


  const onSubmit: SubmitHandler<EditFormData> = (data) => {
    const formData = new FormData()
    formData.append('firstName', data.firstName)
    formData.append('lastName', data.lastName)
    formData.append('email', data.email)
    formData.append('about', data.about)
    formData.append('password', data.password)
    formData.append('jobTitle', data.jobTitle)
    if (data.profileImage && data.profileImage[0]) {
      formData.append('image', data.profileImage[0])
    }
    mutate(formData)
  }

  return (
    <div className="flex items-center justify-center font-montserrat mx-auto max-md:flex-col">
      <div className="w-[40%] mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="md:flex justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                {...register('firstName')}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                {...register('lastName')}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register('email')}
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
              Job Title
            </label>
            <input
              {...register('jobTitle')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              {...register('password')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              About
            </label>
            <textarea
              rows={5}
              {...register('about')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register('profileImage')}
              className="mt-1 block w-full text-sm text-gray-700"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 focus:ring-indigo-500 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2`}
          >
            {isLoading ? 'Processing...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  )
}
export default VolunteerEdit