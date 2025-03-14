import { blogsData } from "@/shared/data"
import { BlogCardList } from "@/widgets/blog"
import { type FC } from "react"

const News: FC = () => {
	return (
		<>
			<BlogCardList data={[...blogsData, ...blogsData, ...blogsData]} />
		</>
	)
}

export { News }
