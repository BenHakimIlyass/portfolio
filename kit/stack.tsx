import React, { createElement, useMemo } from 'react'
import { theme } from '../tailwind.config'

type Props = {
  children: React.ReactNode
  gap?: '0' | '6' | '8' | '12' | '18' | '30' | '40' | '60' | '80' | '100'
  row?: boolean
  className?: string
}

const Stack = ({
  children,
  gap = '0',
  row = false,
  className = '',
  ...rest
}: Props) => {
  return createElement(
    'div',
    {
      className: `flex ${row ? 'flex-row' : 'flex-col'}  ${className}`,
      ...rest,
    },
    children
  )
}

export default Stack
