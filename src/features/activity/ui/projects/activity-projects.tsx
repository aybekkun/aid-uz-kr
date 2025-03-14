import { projectsData } from "@/shared/data/projects.data"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const ActivityProjects: FC = () => {
	return (
		<>
			<BlogList
				separatorClassName={"bg-primary-secondary"}
				itemClassNames={{
					separator: "bg-primary-secondary",
					button: "ml-auto"
				}}
				data={projectsData}
			/>
		</>
	)
}

export { ActivityProjects }
