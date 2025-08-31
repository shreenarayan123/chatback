'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  question: z.string().min(2).max(500),
  answer: z.string().min(2).max(20000),
})

const QnaPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
      answer: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Q&A</h3>
        <p className="font-medium text-zinc-500">
          Craft responses for important questions, ensuring your AI Agent shares
          the most relevant info. Use Custom Answers to add images and videos
          for enhanced engagement.
        </p>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 py-5 "
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-zinc-600">
                    Question
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: What is your refund policy?"
                      type="text"
                      className="shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-zinc-600">
                    Answer
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="self-end">
              Add
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default QnaPage
