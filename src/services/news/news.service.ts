"use server"

import type { ParamId, Response, ResponseSingleData } from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"
import type { News } from "./news.types"

export const getNews = async (): Promise<Response<News>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return api.get(
		`/news`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export const getNewsById = async (
	id: ParamId
): Promise<ResponseSingleData<News>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return api.get(
		`/news/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}
