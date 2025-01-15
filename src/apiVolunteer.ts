import { ForgotPasswordFormData } from './pages/volunteer/authentication/ForgotPassword'
import { LoginFormData } from './pages/volunteer/authentication/Login'
import { RegisterFormData } from './pages/volunteer/authentication/Register'


type VolunteerReturnType = {
  _id: string
  firstName: string
  lastName: string
  email:string
  about:string
  jobTitle:string
  imageInfo: {imageUrl: string, imageId: string}
  createdAt: Date
  updatedAt:Date
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const registerVolunteer = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/auth/volunteer/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }
  return body
}


export const loginVolunteer = async (formData: LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/auth/volunteer/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }

  return body
}


export const logoutVolunteer = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/volunteer/logout`, {
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Logout failed')
  }
}

export const verifyEmail = async (code: string) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/volunteer/email/verify/${code}`,
    {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody)
  }
}


export const sendForgotPasswordEmail = async (
  email: ForgotPasswordFormData
) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/volunteer/password/forgot`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    }
  )
  const responseBody = await response.json()
  
  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const resetPassword = async (
  formData: FormData
) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/volunteer/password/reset`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code:formData.get('code'), password:formData.get('password')}),
    }
  )

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(responseBody.message)
  }
}

export const getVolunteer = async (): Promise<VolunteerReturnType> => {
  const response = await fetch(`${API_BASE_URL}/volunteer/user`, {
    credentials: 'include',
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }
  return body
}


export const updateVolunteer = async (formData: FormData): Promise<VolunteerReturnType> => {
  const response = await fetch(`${API_BASE_URL}/volunteer/user/update`, {
    credentials: 'include',
    method: 'PUT',
    body: formData,
  })

  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }

  return body
}
