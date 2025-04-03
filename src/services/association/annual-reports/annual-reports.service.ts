import type {
	GetParams,
	ParamId,
	Response,
	ResponseSingleData
} from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"
import type { AnnualReport } from "./annual-reports.types"

const getAnnualReports = async (
	params: GetParams = {}
): Promise<Response<AnnualReport>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/annual-reports`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getAnnualReportsById = async (
	id: ParamId
): Promise<ResponseSingleData<AnnualReport>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/annual-reports/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getAnnualReports, getAnnualReportsById }
