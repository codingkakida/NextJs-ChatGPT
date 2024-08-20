import React from 'react'

export default function HistoryNav() {
  return (
         <nav className="flex flex-col space-y-2">
            <h3 className="mt-6 text-sm uppercase text-gray-500">Today</h3>
            <a href="#" className="text-gray-200">Next.js Day-3</a>
            <h3 className="mt-6 text-sm uppercase text-gray-500">Yesterday</h3>
            <a href="#" className="text-gray-200 px-2 hover:bg-gray-500 rounded-full">Codingkakida</a>
            <a href="#" className="text-gray-200 px-2">LLM Proxy Tutorial</a>
            <h3 className="mt-6 text-sm uppercase text-gray-500">Previous 7 Days</h3>
            <a href="#" className="text-gray-200">GenAI with codingkakida</a>
            <a href="#" className="text-gray-200">codingkakida.com</a>
        
            </nav>
  )
}
