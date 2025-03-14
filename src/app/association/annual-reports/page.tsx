import { AssociationAnnualReports } from "@/features/association"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Годовые отчеты"
}

const Page: NextPage = () => {
	return (
		<section>
			<AssociationAnnualReports />
		</section>
	)
}

export default Page
