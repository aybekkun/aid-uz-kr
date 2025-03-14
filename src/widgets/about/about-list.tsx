import { cn } from "@/shared/lib/utils"
import type { About } from "@/shared/types/about.types"
import { Stack } from "@/widgets"
import { AboutItem } from "@/widgets/about/about-item"
import { type FC } from "react"

interface AboutListProps {
	data: About[]
	className?: string
	itemClassName?: string
	itemTitleType?: "h1" | "h2"
	itemClassNames?: {
		title?: string
		description?: string
	}
}

const AboutList: FC<AboutListProps> = ({
	data: charters,
	className,
	itemClassName,
	itemClassNames,
	itemTitleType
}) => {
	return (
		<Stack className={cn("flex-col gap-8", className)}>
			{charters.map((charter, index) => (
				<AboutItem
					className={itemClassName}
					title={charter.title}
					type={itemTitleType ? itemTitleType : charter.items ? "h2" : "h1"}
					key={index}
					classNames={itemClassNames}
				>
					{charter.description}
					{charter?.items
						? charter.items.map((subItem, index) => (
								<AboutItem title={subItem.title} type={"h2"} key={index}>
									{subItem.description}
								</AboutItem>
							))
						: charter.description}
				</AboutItem>
			))}
		</Stack>
	)
}

export { AboutList }
