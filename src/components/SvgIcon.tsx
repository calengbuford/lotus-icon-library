export type IconProps = {
  /**
   * Node passed into the SVG element.
   */
  children?: React.ReactNode;
  /**
   * The color of the component.
   * @default 'currentColor'
   */
  color?: string
  /**
   * The size of the component.
   * @default '32px'
   */
  fontSize?: string
}

export type SvgProps = {
  /**
   * A presentation attribute defining the algorithm to use to determine the inside part of a shape.
   * @default undefined
   */
  fillRule?: "inherit" | "nonzero" | "evenodd"
}

const svgStyles = {
  userSelect: 'none' as 'auto'|'none'|'text'|'all',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  // transition: 'fill ...'
}
    
const SvgIcon = (props: IconProps & SvgProps) => {
  const {
    children,
    color = 'inherit',
    fontSize = '32px',
    fillRule,
  } = props;

  return (<svg
    viewBox="0 0 32 32"
    fill="currentColor"
    style={svgStyles}
    color={color}
    fontSize={fontSize}
    focusable={false}
    aria-hidden={true}
    fillRule={fillRule}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>)
}

export default SvgIcon