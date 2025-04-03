import { getSeminarsConferences } from "@/services/activity/seminars-conferences"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const ActivitySeminarsConferences: FC = async () => {
	const activitySeminars = await getSeminarsConferences()

	return (
		<>
			<BlogList
				path={"/activity/activity-seminars-conferences"}
				separatorClassName={"bg-primary-secondary"}
				data={activitySeminars?.data?.map((el) => ({
					...el,
					title: el.name
				}))}
			/>
		</>
	)
}

export { ActivitySeminarsConferences }
