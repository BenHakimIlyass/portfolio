import { createElement } from 'react'

const typoVariants = {
  h1: 'font-open_sans font-semibold text-heading2 leading-1',
  h2: 'font-freight_text font-regular text-heading2 leading-2',
  h3: 'font-open_sans font-semibold text-heading3 leading-3',
  h4: 'font-playfair_display font-bold text-heading4 leading-4',
  h5: 'font-montserrat font-semibold text-heading5 leading-5',
  h6: 'font-playfair_display font-semibold text-heading6 ',
  p: 'font-montserrat font-regular text-paragraph leading-6',
  small: 'font-montserrat font-regular text-small leading-6',
  smallSemibold: 'font-montserrat font-semibold text-small leading-6',
  smallFreightText: 'font-freight_text font-regular text-paragraph leading-7',
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
