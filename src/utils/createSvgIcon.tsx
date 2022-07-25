
// export const createSvgIcon = (SVGComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
//     title?: string | undefined;
//   }>) => {
// export const createSvgIcon = (SVGComponent: JSX.Element) => {
export const createSvgIcon = (SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>) => {
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

  // return <SVGComponent {...svgAttrs} style={svgStyles} color={color} fontSize={fontSize} />
  return <SVGComponent {...svgAttrs} style={svgStyles} />
  // return <SVGComponent />
}
