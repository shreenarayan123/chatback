'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation.js'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { createAgent } from '@/app/actions/createAgent'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const formSchema = z.object({
  agentName: z.string().min(2, {
    message: 'Agent name must be at least 2 characters.',
  }),
  agentDescription: z
    .string()
    .min(5, { message: 'Description must be at least 5 characters.' }),
})

const CreateAgent = () => {
  const [modelOpen, setModelOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams()
  const { data: session } = authClient.useSession()
  const router = useRouter()

  useEffect(() => {
    if (searchParams.get('create') === 'true') {
      setModelOpen(true)
      router.replace('/dashboard/agents')
    }
  }, [searchParams, router])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agentName: '',
      agentDescription: '',
    },
  })

  const handleClose = () => {
    form.reset()
    setModelOpen(!modelOpen)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("session:", session);
    
    if (!session?.user?.id) {
      toast.error('User not authenticated. Please log in again.')
      return
    }
    
    try {
      setLoading(true)
      const newAgent = await createAgent(
        session.user.id,
        values.agentName,
        values.agentDescription,
      )

      if (newAgent) {
        console.log('Agent create successfully', newAgent)
        router.push(`/dashboard/agents/train-agent/${newAgent.id}/file`)
      }
    } catch (error) {
      console.error('Error creating agent:', error)
      toast.error('Failed to create agent.')
    } finally {
      setLoading(false)
      handleClose()
    }
  }
  return (
    <Dialog open={modelOpen} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button variant="default">Create Agent</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Create Agent</DialogTitle>
              <DialogDescription>
                Provide the name and description of the Agent.
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="agentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Customer Support" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agentDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Chatbot for handling customer queries."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                <LoaderIcon
                  className={`animate-spin ${loading ? 'block' : 'hidden'}`}
                />
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateAgent
