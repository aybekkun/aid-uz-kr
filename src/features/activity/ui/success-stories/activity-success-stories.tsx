import { successStoriesData } from "@/shared/data/success-stories.data"
import { BlogCardList } from "@/widgets/blog"
import { type FC } from "react"

const ActivitySuccessStories: FC = () => {
	return (
		<>
			<BlogCardList
				itemClassName={"border-0 shadow-none"}
				itemClassNames={{
					content: "p-0",
					header: "px-0 py-4",
					image: "rounded-2xl",
					title: "text-base font-bold",
					description: "text-sm line-clamp-[7] text-justify"
				}}
				data={successStoriesData}
			/>
		</>
	)
}

export { ActivitySuccessStories }
