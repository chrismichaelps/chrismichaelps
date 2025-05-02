import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { lazy } from 'react'
import App from './App'

// Create the root route
export const rootRoute = createRootRoute({
  component: App,
})

// Create routes for different sections
export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazy(() => import('./pages/home')),
})

export const cvRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cv',
  component: lazy(() => import('./pages/cv')),
})

export const researchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/research',
  component: lazy(() => import('./pages/research')),
})

export const publicationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/publications',
  component: lazy(() => import('./pages/publications')),
})

export const academicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academic',
  component: lazy(() => import('./pages/academic')),
})

export const papersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/papers',
  component: lazy(() => import('./pages/papers')),
})

export const librariesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/libraries',
  component: lazy(() => import('./pages/libraries')),
})

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: lazy(() => import('./pages/contact')),
})

// Create the router and register the routes
export const routeTree = rootRoute.addChildren([
  homeRoute,
  cvRoute,
  researchRoute,
  publicationsRoute,
  academicRoute,
  papersRoute,
  librariesRoute,
  contactRoute,
])

const router = createRouter({ routeTree })

export default router 