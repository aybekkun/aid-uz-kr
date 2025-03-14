import { AssociationAbout } from "@/features/association"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Об Ассоциации"
}

export default function Page() {
	return (
		<section>
			<AssociationAbout />
		</section>
	)
}
