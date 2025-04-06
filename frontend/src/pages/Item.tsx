// PAGE ITEM, WHERE USER CAN UPDATE AND DELETE ITEM

import ItemForm from "@/components/forms/ItemForm"
import Navbar from "@/components/Navbar"
import { getRouteApi } from "@tanstack/react-router"
import { updateItem } from "@/services/itemApi"

interface ItemData{
  id: number,
  name: string,
  price: number,
  user_id: number,
}

function Item() {
  const route = getRouteApi("/items/$id")
  const item: ItemData = route.useLoaderData()
  const id = item.id.toString()

  return (
    <main className="w-full min-h-dvh bg-accent">
        <Navbar />
        <ItemForm id={id} name={item.name} price={item.price} submitfunc={updateItem} title="Update Item" description="Change the details you want to apply to the item" type="update" />
    </main>
  )
}

export default Item
