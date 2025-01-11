import { useQuery } from "react-query"
import * as apiVolunteer from '../apiVolunteer'

export const AUTH_ORGANISATION = 'auth'

const useOrganisationAuth = (opts = {}) => {
    const { data: volunteer, ...rest } = useQuery({
        queryKey: [AUTH_ORGANISATION],
        queryFn: apiVolunteer.getVolunteer,
        staleTime:Infinity,
        ...opts
    })
    
    return { volunteer, ...rest }
}

export default useOrganisationAuth