// REUSABLE COMPONENT THAT DISPLAYS ITEM INFO

import { Link } from "@tanstack/react-router";

import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardDescription, 
  CardTitle} from "./ui/card"

interface ItemCardProps {
  id: number;
  name: string;
  price: number;
}

function ItemCard({id, name, price}: ItemCardProps) {
  let stringId = id.toString()
  return (
    <Link to="/items/$id" params={{id: stringId}}>
      <Card className="h-64 hover:-translate-y-2 hover:bg-secondary-foreground hover:text-white active:bg-card-foreground transition-all">
        <CardHeader>
          <CardDescription className="text-center text-lg font-semibold">Item</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-full gap-8">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <p className="font-semibold">₱{price}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ItemCard
