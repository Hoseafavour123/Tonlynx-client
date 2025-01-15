import { useVolunteerAuthContext } from '../../context/VolunteerAuthContext'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const VolunteerProfile = () => {
  const { volunteer } = useVolunteerAuthContext()
  return (
    <div className="md:p-5 bg-white rounded-md">
      <div className="flex justify-between md:border md:p-2 max-md:p-3 rounded-md">
        <div className="md:flex md:gap-5">
          <div className='rounded-full h-20 w-20'>
             <img src={volunteer?.imageInfo.imageUrl} alt="h-full w-full" />
          </div>
          <div>
            <h1 className="md:text-2xl font-bold text-indigo-700 capitalize">
              {volunteer?.firstName} {volunteer?.lastName}
            </h1>
            <p className="text-sm">{volunteer?.email}</p>
            <p className="text-sm text-green-500">Open for work</p>
          </div>
        </div>
        <div>
          <Link to={'/volunteer/profile/edit'} className='w-full'>
            <FaEdit className="max-md:text-xl text-2xl md:mr-5 text-indigo-700 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="md:mt-8 md:border md:p-2 rounded-sm">
        <p className="text-2xl max-md:text-xl font-bold capitalize text-center">
          {volunteer?.jobTitle ? volunteer?.jobTitle : 'Job Title'}
        </p>
        <div className="flex flex-col justify-center items-center p-4">
          <div className="w-full sm:w-1/2 md:w-3/5 text-center p-4 rounded-md shadow-md">
           {volunteer?.about}
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default VolunteerProfile
