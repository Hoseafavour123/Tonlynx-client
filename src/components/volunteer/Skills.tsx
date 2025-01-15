import  { useState } from 'react'
import Select from 'react-select'

// Define a list of possible skills
const allSkills = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'node' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'CSS', value: 'css' },
  { label: 'HTML', value: 'html' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Django', value: 'django' },
  { label: 'MongoDB', value: 'mongodb' },
  // Add more skills as necessary
]

const SkillsSection = () => {
  const [skills, setSkills] = useState<string[]>([])
  const [selectedSkill, setSelectedSkill] = useState<any>(null)

  // Add selected skill to the list
  const handleAddSkill = () => {
    if (skills.length >= 5) {
      setError('You can only add up to 5 skills');
      return;
    }

    if (selectedSkill && !skills.includes(selectedSkill.label)) {
      setSkills([...skills, selectedSkill.label]);
      setSelectedSkill(null); // Clear the selection
      setError(''); // Clear error message if successful
    }
  };

  // Remove a skill from the list
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Volunteer Skills
        </h2>

        {/* Searchable dropdown using react-select */}
        <div className="mb-6 flex justify-center items-center gap-4">
          <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[40%]">
            <Select
              value={selectedSkill}
              onChange={setSelectedSkill}
              options={allSkills}
              placeholder="Select or search for a skill"
              className="w-full"
              styles={{
                control: (provided) => ({
                  ...provided,
                  borderRadius: '8px',
                  borderColor: '#ddd',
                  '&:hover': {
                    borderColor: '#aaa',
                  },
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: 200, // Limit dropdown height
                  overflowY: 'auto', // Enable scroll
                }),
              }}
            />
          </div>
          <button
            onClick={handleAddSkill}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>

        {/* Display Skills as Tags */}
        <div className="flex flex-wrap md:gap-6 max-md:gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-3 text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-between max-sm:p-2 overflow-hidden"
            >
              <p className="text-lg font-semibold  max-sm:text-sm">{skill}</p>
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsSection


function setError(arg: string) {
    throw new Error(`Function not implemented. ${arg}`)
}

