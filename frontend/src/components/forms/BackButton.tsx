import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
interface BackButtonProps {
    label: string;
    href: string;
}

function BackButton({ label, href }: BackButtonProps) {
  return (
    <div className="flex justify-center items-center w-full">
      <Link to={href} >
        <Button variant="link">
          {label}
        </Button>
      </Link>
    </div>
  )
}

export default BackButton
