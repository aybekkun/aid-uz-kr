import { Button } from "@/shared/ui"
import Link from "next/link"
import type { FC, HTMLAttributeAnchorTarget, ReactNode } from "react"

interface FooterLinkItemProps {
	title: string
	href?: string
	items?: {
		href?: string
		title?: string
		target?: HTMLAttributeAnchorTarget
		rel?: string
		children?: ReactNode
	}[]
}

const FooterLinkItem: FC<FooterLinkItemProps> = ({
	title,
	href = "",
	items = []
}) => {
	return (
		<ul className={"flex flex-col gap-1 max-md:items-center"}>
			<li>
				<h3 className={"text-lg font-semibold"}>{title}</h3>
			</li>
			{items?.map((item, index) => (
				<li key={index} className={"text-lg"}>
					{item?.title ? (
						<Button
							asChild={true}
							variant={"link"}
							className={
								"p-0 text-lg text-foreground font-normal hover:text-primary-secondary"
							}
						>
							<Link
								href={`${href}${item.href}`}
								target={item.target}
								rel={item.rel}
							>
								{item?.title}
							</Link>
						</Button>
					) : (
						item?.children
					)}
				</li>
			))}
		</ul>
	)
}

export { FooterLinkItem }
