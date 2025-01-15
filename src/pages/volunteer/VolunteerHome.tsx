import React from 'react';
import { useVolunteerAuthContext } from '../../context/VolunteerAuthContext';

const VolunteerHome: React.FC = () => {

    const {volunteer} = useVolunteerAuthContext()
    return (
      <div>
        <h1>
          Welcome <span className='text-indigo-600 font-montserrat'> {volunteer?.firstName}</span> to the Volunteer Home Page
        </h1>
      </div>
    )
};

export default VolunteerHome;