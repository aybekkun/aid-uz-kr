import { DocumentsDecrees } from "@/features/documents"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Указы"
}

const Page: NextPage = () => {
	return (
		<section>
			<DocumentsDecrees />
		</section>
	)
}

export default Page
