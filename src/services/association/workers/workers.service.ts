"use server"

import type {
	GetParams,
	Member,
	ParamId,
	Response,
	ResponseSingleData
} from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"

const getWorkers = async (
	params: GetParams = {}
): Promise<Response<Member>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/worker`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getWorkersById = async (
	id: ParamId
): Promise<ResponseSingleData<Member>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/worker/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getWorkers, getWorkersById }
