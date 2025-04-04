import { getNews } from "@/services/news"
import { Button } from "@/shared/ui"
import { Container } from "@/widgets"
import { BlogCardList } from "@/widgets/blog"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { type FC } from "react"

const HomeNews: FC = async () => {
	const news = await getNews()

	return (
		<section>
			<Container>
				<div className={"py-10 border-b-4 border-primary px-3"}>
					<h1 className={"text-3xl font-bold ml-10 mb-10"}>Новости</h1>
					<BlogCardList path={"/news"} data={news?.data} />
					<div className={"mt-5 flex justify-center"}>
						<Button variant={"default-secondary"} asChild={true}>
							<Link href={"/news"}>
								Все новости <ChevronRight />
							</Link>
						</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { HomeNews }
