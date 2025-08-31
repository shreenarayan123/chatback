import PageTile from '@/components/common/PageTile'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <div>
      <div className="container flex flex-col">
        <div className="flex-center">
          <PageTile title="Connect" dotBgColor="bg-pink-400" />
        </div>
        <div className="mt-15 flex-center flex-col">
          <h2 className="main-h2">We're Here to Help</h2>
          <p className="main-p">
            Have questions or need a demo? Reach out to us through any of the{' '}
            <br />
            channels below.
          </p>
        </div>
        <div className="mt-15 flex-center gap-5">
          <Button
            variant={'default'}
            className="cursor-pointer rounded-lg bg-zinc-900 p-5 text-lg text-white"
          >
            Email Us
          </Button>
          <Button
            variant={'outline'}
            className="cursor-pointer rounded-lg p-5 text-lg"
          >
            Schedule a call
          </Button>
        </div>
      </div>
      <div className="-bottom-60 -right-60 absolute h-[500px] w-[500px] rounded-full border-[90px] border-pink-600/80 bg-transparent" />
      <div className="-bottom-60 -left-60 absolute h-[500px] w-[500px] rounded-full border-[90px] border-blue-600/80 bg-transparent" />
    </div>
  )
}

export default Contact
