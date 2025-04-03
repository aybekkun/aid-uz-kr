import { getNews } from "@/services/news"
import { BlogCardList } from "@/widgets/blog"
import { type FC } from "react"

const News: FC = async () => {
	const news = await getNews()

	return (
		<>
			<BlogCardList path={"/news"} data={news?.data} />
		</>
	)
}

export { News }
