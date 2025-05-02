import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routes'

// Create the router instance
const router = createRouter({
  routeTree,
  // Add options like defaultPreload: 'intent' for enhanced UX
  defaultPreload: 'intent',
})

export default router 