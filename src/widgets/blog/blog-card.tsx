import { cn } from "@/shared/lib/utils"
import type { Blog } from "@/shared/types/blog.types"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Image
} from "@/shared/ui"
import Link from "next/link"
import { type FC } from "react"

interface BlogCardProps {
	data: Blog
	className?: string
	path: string
	classNames?: {
		image?: string
		header?: string
		title?: string
		subTitle?: string
		content?: string
		description?: string
	}
}

const BlogCard: FC<BlogCardProps> = ({
	data: blog,
	className,
	classNames,
	path
}) => {
	return (
		<Link href={`${path}/${blog.slug}`}>
			<Card className={cn("overflow-hidden max-w-[390px] mx-auto", className)}>
				<Image
					src={blog?.image}
					width={390}
					height={256}
					alt={blog.title}
					className={cn(
						"w-full min-h-[180px] max-h-[180px] h-full object-cover object-center",
						classNames?.image
					)}
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
		</Link>
	)
}

export { BlogCard }
