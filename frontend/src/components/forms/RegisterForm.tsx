import CardWrapper from "./CardWrapper"
import { RegisterSchema } from "@/schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { z } from "zod"
import { register } from "@/services/authApi"
import toast from "react-hot-toast"

function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      re_password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    
    toast.promise(
      register(data),
      {
        loading: "Creating account...",
        success: () => {
          return "Account created successfully."
        },
        error: (err) => {
          return err.response.data.message
        },
      }
    )
  }
  return (
    <div>
      <CardWrapper title="Register" label="Create an account" otherlink="/login" otherlinktext="Have an account? Login now.">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
              control={form.control}
              name="username"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="userName123" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="email"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="user@email.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="password"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="MyPassword0120" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="re_password"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="MyPassword0120" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

              
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>

      </CardWrapper>
    </div>
  )
}

export default RegisterForm
