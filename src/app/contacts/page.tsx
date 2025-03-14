import { ContactsInfo } from "@/features/contacts"
import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Контакты"
}

export default function Page() {
	return (
		<section className={"py-4 px-4"}>
			<Container>
				<div>
					<ContactsInfo />
				</div>
			</Container>
		</section>
	)
}
