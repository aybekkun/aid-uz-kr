import { ActivityProjects } from "@/features/activity"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Проекты"
}

export default function Page() {
	return (
		<section>
			<ActivityProjects />
		</section>
	)
}
