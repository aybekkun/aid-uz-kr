import type {
	GetParams,
	ParamId,
	Project,
	Response,
	ResponseSingleData
} from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"

const getSeminarsConferences = async (
	params: GetParams = {}
): Promise<Response<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/seminars-conferences`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getSeminarsConferencesById = async (
	id: ParamId
): Promise<ResponseSingleData<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/seminars-conferences/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getSeminarsConferences, getSeminarsConferencesById }
