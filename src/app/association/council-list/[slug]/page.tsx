import { getCouncilListById } from "@/services/association/council-list"
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

	const news = await getCouncilListById(slug)

	return {
		title: news?.data?.full_name
	}
}

export default async function Page({ params }: Props) {
	const slug = params.slug

	const councilList = await getCouncilListById(slug)

	return (
		<section className={"py-4 pb-12"}>
			<Container>
				<div>
					<BlogDescription
						data={{ ...councilList?.data, title: councilList?.data?.full_name }}
					/>
				</div>
			</Container>
		</section>
	)
}
