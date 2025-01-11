import { useQuery } from "react-query"
import * as apiVolunteer from '../apiVolunteer'

export const AUTH_VOLUNTEER = 'auth'

const useVolunteerAuth = (opts = {}) => {
    const { data: volunteer, ...rest } = useQuery({
        queryKey: [AUTH_VOLUNTEER],
        queryFn: apiVolunteer.getVolunteer,
        staleTime:Infinity,
        ...opts
    })
    
    return { volunteer, ...rest }
}

export default useVolunteerAuth