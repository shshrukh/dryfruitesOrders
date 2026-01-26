import React, { useState } from 'react'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img 
            src="/images/logo.png" 
            alt="Hunza Naturals" 
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Search Bar - Hidden on mobile, visible on md and up */}
        <form 
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8"
        >
          <div className="relative w-full flex">
            <input
              type="text"
              placeholder="What Are You Looking For..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-l-full border border-gray-200 border-r-0 bg-gray-50/50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3  text-white font-medium rounded-r-full bg-[#F59115] hover:bg-orange-600 transition-all duration-200 text-sm whitespace-nowrap cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>

        {/* Hamburger Menu */}
        <div className='flex justify-center items-center gap-4 cursor-pointer'>
          <button>
          <img src="/images/cart.svg" alt="" />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-200"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-200"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-200"></span>
        </button>

        </div>
        
      </div>

      {/* Mobile Search Bar - Visible only on mobile when menu is open */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-2">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative w-full flex">
              <input
                type="text"
                placeholder="What Are You Looking For..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 rounded-l-full border border-gray-200 border-r-0 bg-gray-50/50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-r-full hover:from-orange-500 hover:to-orange-600 transition-all duration-200 text-sm whitespace-nowrap cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>
          
          {/* Mobile Menu Links */}
          <div className="mt-4 flex flex-col gap-2 pb-2">
            <a href="/" className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors">
              Home
            </a>
            <a href="/products" className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors">
              Products
            </a>
            <a href="/about" className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors">
              About Us
            </a>
            <a href="/contact" className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
