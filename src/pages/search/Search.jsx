import { AiOutlineSearch } from "react-icons/ai"

export default function Search({ placeholder }){
  return(
    <form>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch size={20} />
          </div>
          <input type="search" id="default-search" className="bg-primar cursor-pointer block w-[19rem] p-2 pl-10 text-sm text-p-primary focus:ring-2 focus:ring-indigo-400 border border-indigo-500 rounded-sm input" placeholder={placeholder} required />
        </div>
      </form>
  )
}