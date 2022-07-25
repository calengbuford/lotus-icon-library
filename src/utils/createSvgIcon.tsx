import React, { memo } from 'react';
import SvgIcon, { IconProps, SvgProps } from '../components/SvgIcon';
import { merge } from 'lodash'

/**
 * Builds and returns a react, SVG, memoized component.
 * @param {React.ReactNode} path The path for the svg element
 * @param {SvgProps} svgProps Additional props for the svg level of the component
 * @param {string} displayName The icon name used for testing and local development
 * @returns {React.MemoExoticComponent} A react, SVG, memoized component
 */
export default function createSvgIcon(path: React.ReactNode, svgProps: SvgProps, displayName: string) {
  const Component = (props: IconProps) => {
    const _props = merge(svgProps, props)
    return (
      <SvgIcon data-testid={`${displayName}Icon`} {..._props}>
        {path}
      </SvgIcon>
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`
  }

  return memo(Component)
}
