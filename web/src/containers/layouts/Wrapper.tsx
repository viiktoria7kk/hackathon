import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils'

const wrapperVariants = cva('mx-auto w-full max-w-screen-xl ', {
  variants: {
    variant: {
      default: 'px-2.5',
      app: 'relative flex items-center flex-col flex-1 flex-grow',
      page: 'flex flex-col gap-10 py-6',
      auth: 'relative flex flex-col items-center justify-center min-h-screen',
      spacing: 'md:px-20'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export interface WrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <div className={cn(wrapperVariants({ variant, className }))} {...props}>
      {children}
    </div>
  )
}

export default Wrapper
