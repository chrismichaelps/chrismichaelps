import { useEffect } from 'react'
import { Outlet, useMatchRoute } from '@tanstack/react-router'
import { useSelector, useDispatch } from 'react-redux'
import { runPageAnimations } from './utils/setupAnimations'
import { setLoaded, setRendered } from './store/appSlice'

import Header from './components/Header'
import './App.css'

function App() {
  const loaded = useSelector((state) => state.app.loaded)
  const rendered = useSelector((state) => state.app.rendered)
  const dispatch = useDispatch()
  const matchRoute = useMatchRoute()

  // Run animations when the component mounts
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      dispatch(setLoaded(true))
      
      // Trigger a re-render after a small delay, then run animations
      setTimeout(() => {
        dispatch(setRendered(true))
        setTimeout(() => {
          runPageAnimations()
        }, 50)
      }, 100)
    }, 1000)
  }, [dispatch])

  // Run animations on route change
  useEffect(() => {
    if (loaded && rendered) {
      runPageAnimations()
    }
  }, [matchRoute, loaded, rendered])

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#4AF626] px-2 sm:px-4 md:px-6 py-2 flex flex-col max-w-full overflow-x-hidden dot-pattern-dark">
      {!loaded ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl">
            Loading developer profile<span className="cursor"></span>
          </p>
        </div>
      ) : (
        <>
          <Header />
          <main className="flex-1 w-full max-w-7xl mx-auto mt-4 sm:mt-6 overflow-x-hidden">
            <Outlet />
          </main>
          <footer className="w-full max-w-7xl mx-auto mt-6 text-center text-xs opacity-50 py-4">
            <p>© {new Date().getFullYear()} | Software Developer</p>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
