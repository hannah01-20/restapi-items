import { Link } from "@tanstack/react-router"

function Addbutton() {
  return (
    <Link to="/create-item" title="Create Iteam">
      <div className="fixed bottom-4 sm:bottom-16 right-4 sm:right-16 w-16 h-16 bg-accent-foreground text-white flex justify-center items-center text-5xl rounded-full pb-2 transition-all animate-bounce hover:animate-none hover:bg-card hover:text-black active:animate-in">
        +
      </div>
    </Link>
  )
}

export default Addbutton
