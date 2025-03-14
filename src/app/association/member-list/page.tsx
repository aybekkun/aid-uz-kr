import { AssociationMemberList } from "@/features/association"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Список членов"
}

const Page: NextPage = () => {
	return (
		<section>
			<AssociationMemberList />
		</section>
	)
}

export default Page
