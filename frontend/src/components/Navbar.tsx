import { Button } from "./ui/button"
import { Link } from "@tanstack/react-router"

function Navbar() {
  return (
    <nav className="bg-card p-2 sm:px-8">
      <ul className="flex justify-between items-center">
        <li className="text-xl font-semibold"><Link to="/">ITEMS</Link></li>
        <li ><Button variant={"outline"}>Logout</Button></li>
      </ul>
    </nav>
  )
}

export default Navbar
