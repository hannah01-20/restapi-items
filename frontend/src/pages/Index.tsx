import Addbutton from "@/components/Addbutton"
import ItemCard from "@/components/ItemCard"
import Navbar from "@/components/Navbar"
import { getRouteApi } from "@tanstack/react-router"

interface userData {
  username: string,
  email: string,
}

interface ItemData {
  id: number,
  name: string,
  description: string,
  price: number,
}

interface RouteData {
  user: userData,
  items: ItemData[]
}

function Index() {
  const route = getRouteApi("/")
  const {user, items}: RouteData = route.useLoaderData()
  
  return (
    <main className="w-full min-h-dvh bg-accent">
      <Navbar />
      <div className="p-2 sm:p-8">
        <h1 className="text-xl font-semibold">Hello, {user.username}!</h1>
        <p className="text-muted-foreground">{user.email}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-10 sm:p-16">
          {items.length ? 
            items.map((item)=>(
            <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} />
            ))
            : 
            <h1>No Data</h1>}
        </div>
      </div>
      <Addbutton />
    </main>
  )
}

export default Index
