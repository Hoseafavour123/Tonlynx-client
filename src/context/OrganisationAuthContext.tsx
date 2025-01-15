import { createContext, useContext, ReactNode } from 'react'
import useOrganisationAuth from '../hooks/useOrganisationAuth'

type OrganisationAuthContextType = ReturnType<typeof useOrganisationAuth>

const OrganisationAuthContext = createContext<
  OrganisationAuthContextType | undefined
>(undefined)

export const OrganisationAuthProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const auth = useOrganisationAuth()

  return (
    <OrganisationAuthContext.Provider value={auth}>
      {children}
    </OrganisationAuthContext.Provider>
  )
}

export const useOrganisationAuthContext = () => {
  const context = useContext(OrganisationAuthContext)
  if (!context) {
    throw new Error(
      'useOrganisationAuthContext must be used within a OrganisationAuthProvider'
    )
  }
  return context
}
