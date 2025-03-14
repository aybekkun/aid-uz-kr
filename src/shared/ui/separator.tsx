"use client"

import { cn } from "@/shared/lib/utils"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as React from "react"

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
	(
		{ className, orientation = "horizontal", decorative = true, ...props },
		ref
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn(
				"shrink-0 bg-primary",
				orientation === "horizontal"
					? "h-[3px] w-full my-8"
					: "h-full w-[3px] mx-8",
				className
			)}
			{...props}
		/>
	)
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
