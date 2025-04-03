import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card"

import AuthHeader from "./AuthHeader";
import BackButton from "./BackButton";

interface CardWrapperProps { 
    title: string;
    label: string;
    otherlink: string;
    otherlinktext: string;
    children: React.ReactNode;
}

function CardWrapper({ title, label, otherlink, otherlinktext, children }: CardWrapperProps) {
  return (
    <Card className="w-[90%] sm:w-1/4 shadow-md absolute top-[50%] left-[50%] -translate-1/2">
        <CardHeader>
            <AuthHeader title={title} label={label} />
        </CardHeader>
        <CardContent>
            { children }
        </CardContent>
        <CardFooter>
            <BackButton label={otherlinktext} href={otherlink}/>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper
