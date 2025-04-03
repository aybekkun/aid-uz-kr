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

const getCouncilList = async (
	params: GetParams = {}
): Promise<Response<Member>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/council-list`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getCouncilListById = async (
	id: ParamId
): Promise<ResponseSingleData<Member>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/council-list/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getCouncilList, getCouncilListById }
