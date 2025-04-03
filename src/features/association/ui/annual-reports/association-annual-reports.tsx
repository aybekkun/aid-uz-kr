import { getAnnualReports } from "@/services/association/annual-reports"
import { type FC } from "react"
import { AnnualReportsList } from "./annual-reports-list"

const AssociationAnnualReports: FC = async () => {
	const annualReports = await getAnnualReports()
	return (
		<>
			<AnnualReportsList data={annualReports.data} />
		</>
	)
}

export { AssociationAnnualReports }
