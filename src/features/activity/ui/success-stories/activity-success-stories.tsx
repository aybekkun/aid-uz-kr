import { getSuccessStories } from "@/services/activity/success-stories"
import { BlogCardList } from "@/widgets/blog"
import { type FC } from "react"

const ActivitySuccessStories: FC = async () => {
	const successStories = await getSuccessStories()

	return (
		<>
			<BlogCardList
				path={"/activity/success-stories"}
				itemClassName={"border-0 shadow-none"}
				itemClassNames={{
					content: "p-0 bg-background",
					header: "px-0 py-4 bg-background",
					image: "rounded-2xl",
					title: "text-base font-bold",
					description: "text-sm line-clamp-[7] text-justify"
				}}
				data={successStories?.data.map((el) => ({
					...el,
					title: el.name
				}))}
			/>
		</>
	)
}

export { ActivitySuccessStories }
