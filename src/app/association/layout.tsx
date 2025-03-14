import { linksData } from "@/shared/data/links.data"
import { Container, LinksContainer } from "@/widgets"
import type { Metadata, NextPage } from "next"
import type { PropsWithChildren } from "react"

export const metadata: Metadata = {
	title: {
		template: "%s | Ассоцияция",
		default: "Ассоцияция"
	}
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<section className={"py-4"}>
			<Container>
				<div>
					<LinksContainer items={linksData.association.items}>
						{children}
					</LinksContainer>
				</div>
			</Container>
		</section>
	)
}

export default Layout
