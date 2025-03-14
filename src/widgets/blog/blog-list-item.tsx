import { cn } from "@/shared/lib/utils"
import type { Blog } from "@/shared/types"
import {
	Button,
	CardDescription,
	CardTitle,
	Image,
	Separator
} from "@/shared/ui"
import { Stack } from "@/widgets"
import { ChevronRight } from "lucide-react"
import { type FC } from "react"

interface BlogListItemProps {
	data: Blog
	className?: string
	classNames?: {
		title?: string
		subTitle?: string
		description?: string
		image?: string
		button?: string
		separator?: string
	}
}

const BlogListItem: FC<BlogListItemProps> = ({
	data: blog,
	className,
	classNames
}) => {
	return (
		<div className={cn("flex max-md:flex-col gap-8", className)}>
			<div
				className={cn(
					"relative rounded-2xl overflow-hidden max-md:min-h-[290px] md:min-w-[290px] min-h-full grow",
					classNames?.image
				)}
			>
				<Image
					fill={true}
					src={blog.image}
					alt={blog.title}
					className={"object-cover w-full h-full"}
				/>
			</div>
			<div>
				<Stack className={"gap-3 flex-col"}>
					<CardTitle
						className={cn("text-2xl font-bold line-clamp-1", classNames?.title)}
					>
						{blog.title}
					</CardTitle>
					{blog.subTitle && (
						<CardDescription
							className={cn("text-xl line-clamp-1", classNames?.subTitle)}
						>
							{blog.subTitle}
						</CardDescription>
					)}
				</Stack>
				<Separator className={cn("my-5", classNames?.separator)} />
				<Stack className={"gap-3 flex-col items-start"}>
					<p
						className={cn(
							"text-xl text-ellipsis text-justify line-clamp-6",
							classNames?.description
						)}
					>
						{blog.description}
					</p>
					<Button variant={"default-secondary"} className={classNames?.button}>
						Подробнее <ChevronRight />
					</Button>
				</Stack>
			</div>
		</div>
	)
}

export { BlogListItem }
