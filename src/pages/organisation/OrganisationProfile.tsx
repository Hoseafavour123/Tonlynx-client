import { useOrganisationAuthContext } from '../../context/OrganisationAuthContext'
import { FaEdit, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const OrganisationProfile = () => {
  const { organisation } = useOrganisationAuthContext()
  return (
    <div className="md:p-5 bg-white rounded-md">
      <div className="flex justify-between md:border md:p-2 max-md:p-3 rounded-md">
        <div className="md:flex md:gap-5">
          <div className='w-20 h-20 rounded-full'>
            {
              organisation?.imageInfo.imageUrl ? <img src={organisation?.imageInfo.imageUrl} alt="h-full w-full" /> : <FaUser className='text-4xl h-full w-full'/>
            }
          </div>
          <div>
            <h1 className="md:text-2xl font-bold text-indigo-700 capitalize">
              {organisation?.name}
            </h1>
            <p className="text-sm">{organisation?.email}</p>
            <p>{organisation?.type}</p>
            <p className="text-sm text-green-500">{organisation?.address}</p>
          </div>
        </div>
        <div>
          <Link className='w-full ' to={'/organisation/profile/edit'} >
            <FaEdit className="max-md:text-xl text-2xl md:mr-5 text-indigo-700 hover:text-indigo-500 cursor-pointer" />{' '}
          </Link>
        </div>
      </div>
      <div className="md:mt-8 md:border md:p-2 rounded-sm">
        <p className="text-2xl max-md:text-xl font-bold capitalize text-center">
          About
        </p>
        <div className="flex flex-col justify-center items-center p-4">
          {organisation?.about ? (
            <div className="w-full sm:w-1/2 md:w-3/5 text-center p-4 rounded-md shadow-md">
              {organisation?.about}
            </div>
          ) : (
            <div className="w-full sm:w-1/2 md:w-3/5 text-center p-4 rounded-md shadow-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              esse doloribus neque aut animi voluptate numquam magni eum
              voluptatum temporibus delectus magnam perferendis maiores
              expedita, modi adipisci rerum dolore praesentium?
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrganisationProfile
