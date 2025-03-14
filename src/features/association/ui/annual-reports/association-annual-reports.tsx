import { filesData } from "@/shared/data/files.data"
import { type FC } from "react"
import { AnnualReportsList } from "./annual-reports-list"

const AssociationAnnualReports: FC = () => {
	return (
		<>
			<AnnualReportsList data={filesData} />
		</>
	)
}

export { AssociationAnnualReports }
