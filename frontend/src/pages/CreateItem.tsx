// PAGE FOR CREATING A NEW ITEM

import ItemForm from "@/components/forms/ItemForm"
import Navbar from "@/components/Navbar"
import { addItem } from "@/services/itemApi"

function CreateItem() {
  return (
    <main className="w-full min-h-dvh bg-accent">
        <Navbar />
        
        <div>
            <ItemForm 
              name="" 
              price={0.00} 
              title="Create Item"
              description="Fill in the details to create a new item."
              type="create"
              submitfunc={addItem} />
        </div>
    </main>
  )
}

export default CreateItem
