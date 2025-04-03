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

const getSuccessStories = async (
	params: GetParams = {}
): Promise<Response<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/success-stories`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getSuccessStoriesById = async (
	id: ParamId
): Promise<ResponseSingleData<Project>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/success-stories/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getSuccessStories, getSuccessStoriesById }
