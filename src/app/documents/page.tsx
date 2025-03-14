import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Документы"
}

const Page: NextPage = () => {
	return (
		<section className={"flex items-center justify-center w-full min-h-[50vh]"}>
			<h1 className={"text-3xl text-center"}>Документы</h1>
		</section>
	)
}

export default Page
