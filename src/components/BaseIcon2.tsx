import React from 'react'

export type IconProps = {
  color?: string
  fontSize?: string
}

type BaseIconProps = {
  SvgElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  iconProps: IconProps
}

const svgAttrs = {
  focusable: false,
  "aria-hidden": true,
  "data-testid": 'starIcon',
}

const svgStyles = {
  userSelect: 'none' as 'auto'|'none'|'text'|'all',
  width: '3em',
  height: '3em',
  display: 'inline-block',
  flexShrink: 0,
  // transition: 'fill ...'
}

const BaseIcon2 = ({ SvgElement, iconProps }: BaseIconProps) => {
  const {
    color,
    fontSize = '32px'
  } = iconProps
  return <SvgElement {...svgAttrs} style={svgStyles} color={color} fontSize={fontSize} />
}

export default BaseIcon2
