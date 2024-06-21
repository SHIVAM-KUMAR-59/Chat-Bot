import React from 'react'
import { Loader } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'


const SpinnerVariants = cva(
    "text-muted-foreground animate-spin",{
        variants:{
            size:{
                default:'h-4 w-4',
                sm:'h-2 w-2',
                md:'h-6 w-6',
                lg:"h-8 w-8"
            },
        },
        defaultVariants:{
            size:"default"
        }
    }
)

interface SpinnerProps extends VariantProps<typeof SpinnerVariants>{}

type Props = {}
export const Spinner = ({
    size
}:SpinnerProps) =>{
    return (
        <Loader className={cn(SpinnerVariants({size}))}/>
    )
}


export default Spinner