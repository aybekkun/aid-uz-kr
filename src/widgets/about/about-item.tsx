import { cn } from "@/shared/lib/utils"
import { Stack } from "@/widgets"
import type { FC, PropsWithChildren } from "react"

interface AboutItemProps {
	title: string
	type: "h1" | "h2"
	className?: string
	classNames?: {
		title?: string
		description?: string
	}
}

const AboutItem: FC<PropsWithChildren<AboutItemProps>> = ({
	title,
	type,
	className,
	classNames,
	children
}) => {
	const isTitle = type === "h1"

	return (
		<Stack className={cn("flex-col", className)}>
			{isTitle ? (
				<h1 className={cn("uppercase font-bold text-2xl", classNames?.title)}>
					{title}
				</h1>
			) : (
				<h2 className={cn("font-semibold text-2xl", classNames?.title)}>
					{title}
				</h2>
			)}
			<Stack
				className={cn(
					"text-2xl flex-col text-justify",
					classNames?.description
				)}
			>
				{children}
			</Stack>
		</Stack>
	)
}

export { AboutItem }
