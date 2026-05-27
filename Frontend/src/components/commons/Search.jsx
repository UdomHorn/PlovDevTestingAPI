import React from 'react'

const Search = ({searchTerm, setSearchTerm, setHasTyped}) => {
  return (
    <div className=" flex w-full items-center gap-2 rounded-full border  border-white/55 bg-white/65 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition focus-within:border-amber-300/90 focus-within:bg-white/80 focus-within:shadow-[0_12px_32px_rgba(245,158,11,0.14)] sm:flex-1 md:w-auto md:min-w-[13rem]">
                 <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-slate-500 transition group-focus-within:text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  type="text"
                  placeholder="Search courses"
                  value={searchTerm}
                  onChange={(e)=> {
                    setHasTyped(true)
                    setSearchTerm(e.target.value)
                  }}
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500 md:w-40"
                />
              </div>
  )
}

export default Search
