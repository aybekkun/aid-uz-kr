import { ActivitySeminarsConferences } from "@/features/activity"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Семинары и конференции"
}

const Page: NextPage = () => {
	return (
		<section>
			<ActivitySeminarsConferences />
		</section>
	)
}

export default Page
