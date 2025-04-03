import { getWorkers } from "@/services/association/workers"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const AssociationWorkers: FC = async () => {
	const workers = await getWorkers()
	return (
		<>
			<BlogList
				path={"/association/workers"}
				data={workers.data.map((el) => ({
					...el,
					title: el.full_name
				}))}
			/>
		</>
	)
}

export { AssociationWorkers }
