import Item from '@/pages/Item'
import { getItem } from '@/services/itemApi'
import { createFileRoute, redirect } from '@tanstack/react-router'
import toast from 'react-hot-toast'

export const Route = createFileRoute('/items/$id')({
  loader: async ({ params }) => {
    const { id } = params
  
    const item = await getItem(id).catch((error: any)=> {
      toast.error(error.response.data.message || 
        error.response.data.msg || 
        "Failed to fetch item")
        throw redirect({ to: "/"})
      })

    if (item === null){
      toast.error("Item not found")
      throw redirect({ to: "/"})
    }
    // toast.promise(
    //   async () => {
    //     item = await getItem(id)
    //   },{
    //     loading: "Loading...",
    //     error: (err) => {
    //       return err.response.data.message || err.response.data.msg || "Failed to fetch item"
    //     },
    //   }
    // )
    return item
  },
  component: Item,
  onError: () => {
    throw redirect({ to: "/login" })
  },
})


