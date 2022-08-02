import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const RemoveIcon = (props: SvgProps) => (
    <Svg
        aria-hidden="true"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill={"#000000"}
            d="M17 22H7a2 2 0 0 1-2-2V7H3V5h4V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h4v2h-2v13a2 2 0 0 1-2 2ZM7 7v13h10V7H7Zm2-3v1h6V4H9Zm6 14h-2V9h2v9Zm-4 0H9V9h2v9Z"
        />
    </Svg>
)
