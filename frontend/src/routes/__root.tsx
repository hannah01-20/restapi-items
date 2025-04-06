// THIS IS THE ROOT ROUTE

import { Toaster } from 'react-hot-toast'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
})
function Root(){
  return (
    <>
    <Outlet /> {/* This is where the child routes will be rendered */}
    <Toaster />
    </>
  )
}