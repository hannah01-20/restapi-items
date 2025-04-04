import { logout } from "@/services/authApi"
import { Button } from "./ui/button"
import { Link } from "@tanstack/react-router"
import toast from "react-hot-toast"
import { useNavigate } from "@tanstack/react-router"

function Navbar() {
  const navigate = useNavigate()
  const handleLogout = async() => {
    await logout().then(
      ()=>{
        toast.success("Sad to see you go!")
        navigate({to: "/login"})
      }
    ).catch(()=>toast.error("Logout failed"))
  }
  return (
    <nav className="bg-card p-2 sm:px-8">
      <ul className="flex justify-between items-center">
        <li className="text-xl font-semibold"><Link to="/">ITEMS</Link></li>
        <li ><Button variant={"outline"} onClick={handleLogout}>Logout</Button></li>
      </ul>
    </nav>
  )
}

export default Navbar
