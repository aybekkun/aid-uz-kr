import { AssociationWorkers } from "@/features/association"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Сотрудники"
}

const Page: NextPage = () => {
	return (
		<section>
			<AssociationWorkers />
		</section>
	)
}

export default Page
