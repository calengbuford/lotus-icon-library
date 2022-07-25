export type IconProps = {
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
  
const svgStyles = {
  userSelect: 'none' as 'auto'|'none'|'text'|'all',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  // transition: 'fill ...'
}

/**
 * Returns the props and styles needed for every svg element.
 * @param {number} iconName The icon name used to create a data-testid
 * @returns {object} An object with svg props and styles
 */
export const getSvgBaseProps = (iconName: string) => ({
  focusable: false,
  "aria-hidden": true,
  "data-testid": `${iconName}Icon`,
  style: svgStyles,
})
