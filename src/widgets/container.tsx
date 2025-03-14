import { cn } from "@/shared/lib/utils"
import type { ComponentProps, FC } from "react"

const Container: FC<ComponentProps<"div">> = ({
	children,
	className,
	...rest
}) => {
	return (
		<div className={cn("w-full max-w-screen-xl mx-auto", className)} {...rest}>
			{children}
		</div>
	)
}

export { Container }
