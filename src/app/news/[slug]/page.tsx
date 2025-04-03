import { getNewsById } from "@/services/news"
import { Container, HtmlParser } from "@/widgets"
import { BlogDescription } from "@/widgets/blog"
import type { Metadata } from "next"

type Props = {
	params: { slug: string }
}

export const generateMetadata = async ({
	params
}: Props): Promise<Metadata> => {
	const slug = params.slug

	const news = await getNewsById(slug)

	return {
		title: news?.data?.title
	}
}

export default async function Page({ params }: Props) {
	const slug = params.slug

	const news = await getNewsById(slug)

	return (
		<section className={"py-4 pb-12"}>
			<Container>
				<div>
					<BlogDescription data={news?.data} />
					<HtmlParser content={news?.data?.content} />
				</div>
			</Container>
		</section>
	)
}
