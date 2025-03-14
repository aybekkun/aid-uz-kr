import { ActivitySuccessStories } from "@/features/activity"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "История успеха"
}

const Page: NextPage = () => {
	return (
		<section>
			<ActivitySuccessStories />
		</section>
	)
}

export default Page
