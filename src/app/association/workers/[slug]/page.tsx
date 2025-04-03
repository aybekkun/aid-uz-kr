import { getWorkersById } from "@/services/association/workers"
import { Container } from "@/widgets"
import { BlogDescription } from "@/widgets/blog"
import type { Metadata } from "next"

type Props = {
	params: { slug: string }
}

export const generateMetadata = async ({
	params
}: Props): Promise<Metadata> => {
	const slug = params.slug

	const news = await getWorkersById(slug)

	return {
		title: news?.data?.full_name
	}
}

export default async function Page({ params }: Props) {
	const slug = params.slug

	const worker = await getWorkersById(slug)

	return (
		<section className={"py-4 pb-12"}>
			<Container>
				<div>
					<BlogDescription
						data={{ ...worker?.data, title: worker?.data?.full_name }}
					/>
				</div>
			</Container>
		</section>
	)
}
