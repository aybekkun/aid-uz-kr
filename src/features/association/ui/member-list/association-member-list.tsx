import { getMemberList } from "@/services/association/member-list"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const AssociationMemberList: FC = async () => {
	const memberList = await getMemberList()
	return (
		<>
			<BlogList
				path={"/association/member-list"}
				data={memberList.data.map((el) => ({
					...el,
					title: el.full_name
				}))}
			/>
		</>
	)
}

export { AssociationMemberList }
