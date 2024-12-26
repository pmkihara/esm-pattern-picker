'use client'

import { ComponentProps } from 'react'
import { ReactSVG } from 'react-svg'

export interface SvgImageProps extends ComponentProps<typeof ReactSVG> {
  src: string
  className?: string
  width?: string
  height?: string
}

const SvgImage = ({ src, className, width, height }: SvgImageProps) => {
  return (
    <ReactSVG
      src={src}
      className={className}
      beforeInjection={(svg) => {
        if (width) svg.setAttribute('width', width)
        if (height) svg.setAttribute('height', height)
      }}
    />
  )
}

export default SvgImage
