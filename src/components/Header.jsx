import { Link, useMatchRoute } from '@tanstack/react-router'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu, closeMenu } from '../store/headerSlice'

const Header = () => {
  const matchRoute = useMatchRoute()
  const menuOpen = useSelector((state) => state.header.menuOpen)
  const dispatch = useDispatch()
  
  const tabs = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'resume', label: 'RESUME', path: '/cv' },
    { id: 'experience', label: 'EXPERIENCE', path: '/research' },
    { id: 'skills', label: 'SKILLS', path: '/publications' },
    { id: 'research', label: 'RESEARCH', path: '/academic' },
    { id: 'libraries', label: 'LIBRARIES', path: '/libraries' },
    { id: 'papers', label: 'PAPERS', path: '/papers' },
    { id: 'contact', label: 'CONTACT', path: '/contact' }
  ]

  const handleToggleMenu = useCallback(() => {
    dispatch(toggleMenu())
  }, [dispatch])

  const handleCloseMenu = useCallback(() => {
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <header className="w-full max-w-7xl mx-auto overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4">
        <div className="typewriter-container w-full md:w-auto flex justify-between items-center">
          <div className="overflow-hidden">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold whitespace-normal break-words">
              <Link to="/" className="hover:no-underline">
                <span className="typewriter">Chris M. Pérez</span><span className="cursor"></span>
              </Link>
            </h1>
            <p className="text-xs sm:text-sm opacity-70">Software Developer | B.Sc. in Computer Science</p>
          </div>
          
          <button 
            className="md:hidden text-terminal-green"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
        
        <nav className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-wrap flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-3 lg:space-x-4 text-sm">
            {tabs.map(tab => (
              <li key={tab.id}>
                <Link
                  to={tab.path}
                  className={`cursor-pointer block px-2 py-1 ${
                    matchRoute({ to: tab.path, fuzzy: tab.path === '/' ? false : true })
                      ? 'text-terminal-green border-b border-terminal-green'
                      : 'text-gray-500 hover:text-terminal-green'
                  }`}
                  onClick={handleCloseMenu}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="mt-3 sm:mt-4 border-b border-terminal-green/30 opacity-50"></div>
    </header>
  )
}

export default Header 