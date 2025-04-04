import { 
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader } from "../ui/card"

import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage } from "../ui/form"

import { zodResolver } from "@hookform/resolvers/zod"

import { ItemSchema } from "@/schema"

import { useForm } from "react-hook-form"

import { useNavigate } from "@tanstack/react-router"

import { z } from "zod"

import { Button } from "../ui/button"

import { Input } from "../ui/input"

import { addItem } from "@/services/itemApi"

import { deleteItem } from "@/services/itemApi"
import toast from "react-hot-toast"

interface ItemFormProps {
    id?: string,
    title: string,
    description: string
    name: string,
    price: number,
    type: string,
    submitfunc?: (data: z.infer<typeof ItemSchema> , id?: string) => Promise<boolean> 
}

function ItemForm({
    name = "", 
    price = 0, 
    submitfunc = addItem, 
    type, 
    title, 
    description, 
    id
    }: ItemFormProps) {
    const form = useForm({
        resolver: zodResolver(ItemSchema),
        defaultValues: {
            name: name,
            price: price,
        },
    })
    const navigate = useNavigate()
    const onSubmit = async (data: z.infer<typeof ItemSchema>) => {
        await submitfunc(data, id ).then(()=> {navigate({ to: "/" })})
    }
    const clearForm = () => {
        form.reset()
    }
    const onDelete = async () => {
        await deleteItem(id).then(
            ()=>{
                toast.success("Item deleted successfully")
                navigate({ to: "/" })
            }).catch(
                ()=>{
                    toast.error("Failed to delete item")
                }
            )
    }
  return (
    <Card className="w-[90%] sm:w-1/4 shadow-md absolute top-[50%] left-[50%] -translate-1/2">
        <CardHeader>
            <CardTitle>
                {title}
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} type="text" placeholder="Item Name" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="price"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input {...field} type="number" placeholder="0.00" 
                                    value={field.value || ""}
                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="flex justify-between">
                        <Button type="button" onClick={clearForm} variant="outline">Clear</Button>
                        <div className="flex gap-3">
                            {type === "update" ? <Button type="button" variant="destructive" onClick={onDelete}>Delete</Button> : "" }
                        
                            <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </CardContent>
    </Card>
  )
}

export default ItemForm
