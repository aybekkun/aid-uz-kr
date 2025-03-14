import { AssociationCouncilList } from "@/features/association"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Список совета"
}

export default function Page() {
	return (
		<section>
			<AssociationCouncilList />
		</section>
	)
}
