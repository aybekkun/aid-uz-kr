import { getCouncilList } from "@/services/association/council-list"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const AssociationCouncilList: FC = async () => {
	const councilList = await getCouncilList()
	return (
		<>
			<BlogList
				path={"/association/council-list"}
				data={councilList.data.map((el) => ({
					...el,
					title: el.full_name
				}))}
			/>
		</>
	)
}

export { AssociationCouncilList }
