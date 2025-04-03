import { cn } from "@/shared/lib/utils"
import type { Blog } from "@/shared/types/blog.types"
import { CardDescription, CardTitle, Image } from "@/shared/ui"
import { type FC } from "react"

interface BlogDescriptionProps {
	data: Blog
}

const BlogDescription: FC<BlogDescriptionProps> = ({ data: blog }) => {
	return (
		<div className={"flex flex-col gap-3 mb-6"}>
			<div className={"relative w-3/4 mx-auto aspect-video"}>
				<Image
					fill={true}
					src={blog.image}
					alt={blog.title}
					className={"object-cover w-full rounded-md h-full"}
				/>
			</div>
			<CardTitle className={cn("text-2xl font-bold line-clamp-1")}>
				{blog.title}
			</CardTitle>
			{blog.description && (
				<CardDescription className={cn("text-xl line-clamp-1")}>
					{blog.description}
				</CardDescription>
			)}
		</div>
	)
}

export { BlogDescription }
