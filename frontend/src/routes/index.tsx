
import Index from '@/pages/Index'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const accesess = localStorage.getItem('access')
    if (!accesess){
      throw redirect({
        to: "/login"
      })
    }
  },
  loader: async () => {},
  component: Index,
})
