import { AnnualReportsItem } from "@/features/association/ui/annual-reports/annual-reports-item"
import type { FileItem } from "@/shared/types/files.types"
import { Separator } from "@/shared/ui"
import { type FC } from "react"

interface AnnualReportsListProps {
	data: FileItem[]
}

const AnnualReportsList: FC<AnnualReportsListProps> = ({ data: files }) => {
	const items = files.flatMap((el) => [undefined, el]).slice(1)

	return (
		<div>
			{items.map((item, index) =>
				item ? (
					<AnnualReportsItem data={item} key={index} />
				) : (
					<Separator key={index} />
				)
			)}
		</div>
	)
}

export { AnnualReportsList }
