import { DocumentsLaws } from "@/features/documents"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Законы"
}

const Page: NextPage = () => {
	return (
		<section>
			<DocumentsLaws />
		</section>
	)
}

export default Page
