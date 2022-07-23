import React from 'react'

export type IconProps = {
  color?: string
  fontSize?: string
}

type BaseIconProps = {
  SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>
  iconProps: IconProps
}

const svgAttrs = {
  focusable: false,
  "aria-hidden": true,
  "data-testid": 'starIcon',
}

const svgStyles = {
  userSelect: 'none' as 'auto'|'none'|'text'|'all',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  // transition: 'fill ...'
}

const BaseIcon = ({ SVGComponent, iconProps }: BaseIconProps) => {
  const {
    color,
    fontSize = '32px'
  } = iconProps
  return <SVGComponent {...svgAttrs} style={svgStyles} color={color} fontSize={fontSize} />
}

export default BaseIcon
