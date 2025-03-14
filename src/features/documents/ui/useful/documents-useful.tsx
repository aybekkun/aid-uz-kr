import { charterData } from "@/shared/data/charter.data"
import { AboutList } from "@/widgets/about"
import { type FC } from "react"

const DocumentsUseful: FC = () => {
	return (
		<>
			<AboutList
				data={charterData}
				itemClassNames={{ title: "text-primary" }}
			/>
		</>
	)
}

export { DocumentsUseful }
