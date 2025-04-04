import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import NotFound from './pages/NotFound'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import Spinner from './components/Spinner'

// Create a new router instance
const router = createRouter({ 
  routeTree,
  defaultNotFoundComponent: NotFound,
  defaultPendingComponent: Spinner,
 })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}