export type IconProps = {
  color?: string
  fontSize?: string
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

export const svgBaseProps = {
  ...svgAttrs,
  style: svgStyles,
}
