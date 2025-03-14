import { News } from "@/services/news"
import { type FC } from "react"
import { BlogCard } from "./blog-card"

interface BlogListProps {
	data: News[]
	itemClassName?: string
	itemClassNames?: {
		image?: string
		header?: string
		title?: string
		subTitle?: string
		content?: string
		description?: string
	}
}

const BlogCardList: FC<BlogListProps> = ({
	data: blogs = [],
	itemClassNames,
	itemClassName
}) => {
	return (
		<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"}>
			{blogs.map((blog, index) => (
				<BlogCard
					classNames={itemClassNames}
					className={itemClassName}
					data={blog}
					key={index}
				/>
			))}
		</div>
	)
}

export { BlogCardList }
