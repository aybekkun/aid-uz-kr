import { getProjects } from "@/services/activity/projects"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const ActivityProjects: FC = async () => {
	const projects = await getProjects()
	return (
		<>
			<BlogList
				path={"/activity/projects"}
				separatorClassName={"bg-primary-secondary"}
				itemClassNames={{
					separator: "bg-primary-secondary",
					button: "ml-auto"
				}}
				data={projects.data.map((el) => ({
					...el,
					title: el.name
				}))}
			/>
		</>
	)
}

export { ActivityProjects }
