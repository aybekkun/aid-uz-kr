import { DocumentsUseful } from "@/features/documents"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Полезные"
}

const Page: NextPage = () => {
	return (
		<section>
			<DocumentsUseful />
		</section>
	)
}

export default Page
