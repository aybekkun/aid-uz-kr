import { DocumentsConvention } from "@/features/documents"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Конвенци"
}

export default function Page() {
	return (
		<section>
			<DocumentsConvention />
		</section>
	)
}
