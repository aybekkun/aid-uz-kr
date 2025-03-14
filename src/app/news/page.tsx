import { News } from "@/features/news"
import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Новости"
}

export default function Page() {
	return (
		<section className={"py-4 pb-12"}>
			<Container>
				<div>
					<News />
				</div>
			</Container>
		</section>
	)
}
