import { getProjectsById } from "@/services/activity/projects"
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

	const news = await getProjectsById(slug)

	return {
		title: news?.data?.name
	}
}

export default async function Page({ params }: Props) {
	const slug = params.slug

	const data = await getProjectsById(slug)

	return (
		<section className={"py-4 pb-12"}>
			<Container>
				<div>
					<BlogDescription data={{ ...data?.data, title: data?.data?.name }} />
				</div>
			</Container>
		</section>
	)
}
