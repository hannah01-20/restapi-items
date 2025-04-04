
import Index from '@/pages/Index'
import { getItems } from '@/services/itemApi'
import { getUserData } from '@/services/userApi'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
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
