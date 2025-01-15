import { useQuery } from "react-query"
import * as apiOrganisation from '../apiOrganisation'

export const AUTH_ORGANISATION = 'auth_organisation'

const useOrganisationAuth = (opts = {}) => {
    const { data: organisation, ...rest } = useQuery({
        queryKey: [AUTH_ORGANISATION],
        queryFn: apiOrganisation.getOrganisation,
        staleTime:Infinity,
        ...opts
    })
    
    return { organisation, ...rest }
}

export default useOrganisationAuth