"use server"

import type {
	GetParams,
	ParamId,
	Project,
	Response,
	ResponseSingleData
} from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"

const getStudies = async (
	params: GetParams = {}
): Promise<Response<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/studies`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getStudiesById = async (
	id: ParamId
): Promise<ResponseSingleData<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/studies/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getStudies, getStudiesById }
