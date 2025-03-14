import { linksData } from "@/shared/data/links.data"
import { Container, LinksContainer } from "@/widgets"
import type { Metadata, NextPage } from "next"
import type { PropsWithChildren } from "react"

export const metadata: Metadata = {
	title: {
		template: "%s | Деятельность",
		default: "Деятельность"
	}
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<section className={"py-4"}>
			<Container>
				<div>
					<LinksContainer items={linksData.activity.items}>
						{children}
					</LinksContainer>
				</div>
			</Container>
		</section>
	)
}

export default Layout
