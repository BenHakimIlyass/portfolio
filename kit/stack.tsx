import React, { createElement } from 'react'

type Props = {
  children: React.ReactNode
  gap?: '0' | '6' | '8' | '12' | '18' | '30' | '40' | '60' | '80' | '100'
  row?: boolean
  className?: string
  wrap?: boolean
}

const Stack = ({
  children,
  gap = '0',
  row = false,
  wrap = false,
  className = '',
  ...rest
}: Props) => {
  return createElement(
    'div',
    {
      className: `flex ${wrap ? 'flex-wrap' : ''} ${
        row ? 'flex-row' : 'flex-col'
      }  ${className}`,
      ...rest,
    },
    children
  )
}

export default Stack
