import React from 'react';
import { useOrganisationAuthContext } from '../../context/OrganisationAuthContext';

const OrganisationHome: React.FC = () => {

    const {organisation} = useOrganisationAuthContext()
    return (
      <div>
        <h1>
          Welcome Organisation <span className='text-indigo-600 font-montserrat'> {organisation.name}</span> to the Volunteer Home Page
        </h1>
      </div>
    )
};

export default OrganisationHome;