import { seminarsConferencesData } from "@/shared/data/seminars-conferences.data"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const ActivitySeminarsConferences: FC = () => {
	return (
		<>
			<BlogList
				separatorClassName={"bg-primary-secondary"}
				data={seminarsConferencesData}
			/>
		</>
	)
}

export { ActivitySeminarsConferences }
