import React,{useState,useEffect} from 'react'


export default function UserMenu() {

  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    const handleMouseLeave = () => {
      setShowUser(false);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
   <>

      <div className="relative mr-80">
        <button 
          className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
          onClick={() => setShowUser(true)}
        >
          User
          <div className="ml-2 rounded-full bg-blue-500 w-6 h-6"></div>
        </button>
        <div onMouseLeave={() => setShowUser(false)} className={`absolute ${showUser ? 'block' : 'hidden'} bg-gray-600 rounded-md shadow-lg z-10 mt-2 w-48 right-0`}>
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-500">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-500">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-500">Logout</li>
          </ul>
        </div>
      </div>
   </>
  )
}
