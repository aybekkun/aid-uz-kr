import type { Blog } from "@/shared/types/blog.types"
import { Separator } from "@/shared/ui"
import { BlogListItem } from "@/widgets/blog/blog-list-item"
import { type FC } from "react"

interface BlogListProps {
	data: Blog[]
	path: string
	itemClassName?: string
	itemClassNames?: {
		title?: string
		subTitle?: string
		description?: string
		image?: string
		button?: string
		separator?: string
	}
	separatorClassName?: string
}

const BlogList: FC<BlogListProps> = ({
	data: blogs,
	path,
	itemClassName,
	separatorClassName,
	itemClassNames
}) => {
	const items = blogs.flatMap((el) => [undefined, el]).splice(1)

	return (
		<div>
			{items.map((blog, index) =>
				blog ? (
					<BlogListItem
						data={blog}
						path={path}
						key={index}
						classNames={itemClassNames}
						className={itemClassName}
					/>
				) : (
					<Separator key={index} className={separatorClassName} />
				)
			)}
		</div>
	)
}

export { BlogList }
