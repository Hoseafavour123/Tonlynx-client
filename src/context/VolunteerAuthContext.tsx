import { createContext, useContext, ReactNode } from 'react'
import useVolunteerAuth from '../hooks/useVolunteerAuth'

type VolunteerAuthContextType = ReturnType<typeof useVolunteerAuth>

const VolunteerAuthContext = createContext<
  VolunteerAuthContextType | undefined
>(undefined)

export const VolunteerAuthProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const auth = useVolunteerAuth()

  return (
    <VolunteerAuthContext.Provider value={auth}>
      {children}
    </VolunteerAuthContext.Provider>
  )
}

export const useVolunteerAuthContext = () => {
  const context = useContext(VolunteerAuthContext)
  if (!context) {
    throw new Error(
      'useVolunteerAuthContext must be used within a VolunteerAuthProvider'
    )
  }
  return context
}
