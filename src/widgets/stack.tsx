import { cn } from "@/shared/lib/utils"
import type { ComponentProps, FC } from "react"

const Stack: FC<ComponentProps<"div">> = ({ className, children, ...rest }) => {
	return (
		<div className={cn("flex gap-5", className)} {...rest}>
			{children}
		</div>
	)
}

export { Stack }
