import { cn } from "@/shared/lib/utils"
import type { Blog } from "@/shared/types"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Image
} from "@/shared/ui"
import { type FC } from "react"

interface BlogCardProps {
	data: Blog
	className?: string
	classNames?: {
		image?: string
		header?: string
		title?: string
		subTitle?: string
		content?: string
		description?: string
	}
}

const BlogCard: FC<BlogCardProps> = ({ data: blog, className, classNames }) => {
	return (
		<Card className={cn("overflow-hidden", className)}>
			<Image
				src={blog?.image}
				width={390}
				height={280}
				alt={blog.title}
				className={cn("w-full max-h-64 object-cover", classNames?.image)}
			/>
			<CardHeader className={classNames?.header}>
				<CardTitle className={cn("text-xl", classNames?.title)}>
					{blog.title}
				</CardTitle>
				<CardDescription className={classNames?.subTitle}>
					{blog.subTitle}
				</CardDescription>
			</CardHeader>
			<CardContent className={classNames?.content}>
				<p
					className={cn(
						"overflow-hidden text-ellipsis line-clamp-[8]",
						classNames?.description
					)}
				>
					{blog.description}
				</p>
			</CardContent>
			{/*<CardFooter></CardFooter>*/}
		</Card>
	)
}

export { BlogCard }
