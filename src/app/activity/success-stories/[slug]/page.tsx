import { getSuccessStoriesById } from "@/services/activity/success-stories"
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

	const news = await getSuccessStoriesById(slug)

	return {
		title: news?.data?.name
	}
}

export default async function Page({ params }: Props) {
	const slug = params.slug

	const data = await getSuccessStoriesById(slug)

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
