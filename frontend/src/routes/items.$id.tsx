import Item from '@/pages/Item'
import { getItem } from '@/services/itemApi'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { error } from 'console'
import toast from 'react-hot-toast'

export const Route = createFileRoute('/items/$id')({
  loader: async ({ params }) => {
    const { id } = params
    const item = await getItem(id).catch((error: any)=> {console.log(error)})

    if (item === null){
      toast.error("Item not found")
      throw redirect({ to: "/"})
    }
    return item
  },
  component: Item,
})


