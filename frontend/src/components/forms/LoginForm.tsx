
import CardWrapper from './CardWrapper'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schema'
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '../ui/form'
import { login } from '@/services/authApi'
import { useNavigate } from '@tanstack/react-router'

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const navigate = useNavigate()
  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    const is_Success = await login(data)
    if (is_Success) {
      navigate({ to: '/' })
    }
  }

  return (
    <div>
      <CardWrapper title="Login" label="Use existing account to login" otherlink="/register" otherlinktext="Don't have an account? Register now.">
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
              
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  )
}

export default LoginForm
