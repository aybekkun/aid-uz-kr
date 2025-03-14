import { AssociationCharter } from "@/features/association"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Устав"
}

export default function Page() {
	return (
		<section>
			<AssociationCharter />
		</section>
	)
}
