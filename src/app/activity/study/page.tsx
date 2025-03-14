import { ActivityStudy } from "@/features/activity"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Исследование"
}

const Page: NextPage = () => {
	return (
		<section>
			<ActivityStudy />
		</section>
	)
}

export default Page
