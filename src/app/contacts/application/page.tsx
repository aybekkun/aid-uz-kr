import { ContactsForm } from "@/features/contacts"
import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Отправить заявку"
}

export default function Page() {
	return (
		<section className={"py-4"}>
			<Container>
				<div>
					<ContactsForm />
				</div>
			</Container>
		</section>
	)
}
