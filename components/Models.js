import React,{useState,useEffect} from 'react'


export default function Models() {

  const [showMenu, setShowMenu] = useState(false);

  //bind models
  const [models,setModels]=useState([]);



  useEffect(() => {
    const handleMouseLeave = () => {
      setShowMenu(false);
    };

    const fetchModelNames = async () => {
        try {
          const response = await fetch('/api/models');
          const data = await response.json();
          // Extract only the names from the fetched data
          const modelNames = data.map(model => model.name); 
          setModels(modelNames);
        } catch (error) {
          console.error('Error fetching models:', error);
        }
      };
  
      fetchModelNames(); 

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
   <>
   <div className="relative">
        <button 
          className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => setShowMenu(true)}
        >
          Models
        </button>
        <div onMouseLeave={() => setShowMenu(false)} className={`absolute ${showMenu ? 'block' : 'hidden'} bg-gray-600 rounded-md shadow-lg z-10 w-48`}>
          <ul className="py-2">
            {models.map((item,index)=>(
                <li key={index} className="px-4 py-2 hover:bg-gray-500">{item}</li>
            ))
            }

          </ul>
        </div>
      </div>
      
   </>
  )
}
