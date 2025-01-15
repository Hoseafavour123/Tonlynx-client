import { ForgotPasswordFormData } from './pages/organisation/authentication/ForgotPassword'
import { LoginFormData } from './pages/organisation/authentication/Login'
import { RegisterFormData } from './pages/organisation/authentication/Register'



type OrganisationReturnType = {
  _id: string
  name:string
  email: string
  address:string
  about: string
  type:string
  imageInfo: {imageUrl: string, imageId: string}
  createdAt: Date
  updatedAt: Date
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const registerOrganisation = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/auth/organisation/register`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...formData, type: formData?.type?.value}),
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }
  return body
}


export const loginOrganisation = async (formData: LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/auth/organisation/login`, {
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

export const logoutOrganisation = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/organisation/logout`, {
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Logout failed')
  }
}

export const verifyOrganisationEmail = async (code: string) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/organisation/email/verify/${code}`,
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
    `${API_BASE_URL}/auth/organisation/password/forgot`,
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

export const resetOrganisationPassword = async (
  formData: FormData
) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/organisation/password/reset`,
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

export const getOrganisation = async (): Promise<OrganisationReturnType> => {
  const response = await fetch(`${API_BASE_URL}/organisation/user`, {
    credentials: 'include',
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }
  return body
}

export const updateOrganisation = async (formData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/organisation/user/update`, {
    method: 'PUT',
    credentials: 'include',
    body: formData,
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.message)
  }
  return body
}