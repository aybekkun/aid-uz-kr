import { getStudies } from "@/services/activity/studies/studies.service"
import { BlogCardList } from "@/widgets/blog"
import { type FC } from "react"

const ActivityStudy: FC = async () => {
	const studies = await getStudies()

	return (
		<>
			<BlogCardList
				path={"/activity/study"}
				itemClassName={"border-0 shadow-none"}
				itemClassNames={{
					content: "p-0 bg-background",
					header: "px-0 py-4 bg-background",
					image: "rounded-2xl",
					title: "text-base font-bold",
					description: "text-sm line-clamp-[7] text-justify"
				}}
				data={studies?.data?.map((el) => ({
					...el,
					title: el.name
				}))}
			/>
		</>
	)
}

export { ActivityStudy }
