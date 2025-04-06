// THIS IS THE INDEX ROOT "/" THAT WILL DISPLAY USER'S ITEMS
import Index from '@/pages/Index'
import { getItems } from '@/services/itemApi'
import { getUserData } from '@/services/userApi'
import { createFileRoute, redirect } from '@tanstack/react-router'

// BEFORE THIS ROUTE RENDERS THE COMPONENT,
// IT WILL CHECK IF THE USER IS AUTHENTICATED
export const Route = createFileRoute('/')({
  beforeLoad: ()=> {
    const access = localStorage.getItem('access')
    const refresh = localStorage.getItem('refresh')
    if (access === null || refresh === null) {
      throw redirect({
        to: "/login"
      })
    }
  },
  loader: async () => {
    const user = await getUserData()
    if (user === null) {
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      throw redirect({
        to: "/login"
      })
    }

    const items = await getItems()

    return {user, items}
  },
  component: Index,
})
