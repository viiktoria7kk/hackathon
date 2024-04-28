import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { FC } from 'react'
import { cn } from '~/utils'

const loaderVariants = cva('', {
  variants: {
    variant: {
      default: '',
      pageLoader: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    },
    size: {
      default: 'h-20 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})
export interface LoaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof loaderVariants> {
  asChild?: boolean
}

const Loader: FC<LoaderProps> = ({ className, variant, size }) => {
  return (
    <div className={cn(loaderVariants({ variant, size, className }))}>
      <Loader2 className='mr-2 h-16 w-16 animate-spin text-zinc-400 ' />
    </div>
  )
}

export default Loader
