import { getNews } from "@/services/news"
import { Container } from "@/widgets"
import { type FC } from "react"
import { PreviewCarousel } from "./preview-carousel"

const HomePreviews: FC = async () => {
	const news = await getNews()

	return (
		<section>
			<Container>
				<div>
					<PreviewCarousel data={news?.data} />
				</div>
			</Container>
		</section>
	)
}

export { HomePreviews }
