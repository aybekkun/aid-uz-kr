import { aboutData } from "@/shared/data/about.data"
import { AboutList } from "@/widgets/about"
import { type FC } from "react"

const AssociationAbout: FC = () => {
	return (
		<>
			<AboutList data={aboutData} />
		</>
	)
}

export { AssociationAbout }
