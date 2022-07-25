import { ReactComponent as StarSVG } from '../../svgs/star.svg'
import BaseIcon, { IconProps } from '../../BaseIcon'

const StarIcon = (props: IconProps) => {
  // return <StarSVG />
  return <BaseIcon SVGComponent={StarSVG} iconProps={props} />
}

export default StarIcon
