import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/Dialog'
import PostForm from '~/containers/forms/PostForm'

export function PostModal({
  id,
  trigger
}: {
  id?: string
  trigger: JSX.Element
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[650px]'>
        <DialogHeader>
          <DialogTitle>{id ? 'Edit post' : 'Add post'}</DialogTitle>
          <DialogDescription>
            {id ? 'Edit post ' : 'Add post'}
          </DialogDescription>
        </DialogHeader>
        <PostForm id={id} setIsOpen={setIsOpen}  />
      </DialogContent>
    </Dialog>
  )
}
