import AddForm from "@/components/forms/AddForm"
import Navbar from "@/components/Navbar"


function CreateItem() {
  return (
    <main className="w-full min-h-dvh bg-accent">
        <Navbar />
        
        <div>
            <AddForm />
        </div>
    </main>
  )
}

export default CreateItem
