import type {
	GetParams,
	ParamId,
	Project,
	Response,
	ResponseSingleData
} from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"

const getProjects = async (
	params: GetParams = {}
): Promise<Response<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/projects`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getProjectsById = async (
	id: ParamId
): Promise<ResponseSingleData<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/projects/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getProjects, getProjectsById }
