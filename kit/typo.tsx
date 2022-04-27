import { createElement } from 'react'

const typoVariants = {
  h1: 'font-open_sans font-semibold text-heading2 ',
  h2: 'font-freight_text font-regular text-heading2 ',
  h3: 'font-open_sans font-semibold text-heading3 ',
  h4: 'font-playfair_display font-bold text-heading4 ',
  h5: 'font-montserrat font-semibold text-heading5 ',
  h6: 'font-playfair_display font-semibold text-heading6 ',
  p: 'font-montserrat font-regular text-paragraph ',
  small: 'font-montserrat font-regular text-small ',
  smallSemibold: 'font-montserrat font-semibold text-small ',
}

type Props = {
  children: React.ReactNode
  className?: string
  variant: keyof typeof typoVariants
  as?: keyof JSX.IntrinsicElements
}

const nonNativeElement = ['smallSemibold', 'small']

const Typo = ({ variant = 'h1', children, className, as, ...rest }: Props) =>
  createElement(
    as ?? (nonNativeElement.includes(variant) ? 'p' : variant),
    { className: `${typoVariants[variant]} ${className}`, ...rest },
    children
  )

export default Typo
