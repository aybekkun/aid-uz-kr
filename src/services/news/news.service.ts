"use server"

import type { ParamId, Response, ResponseSingleData } from "@/services/shared"
import { api } from "@/shared/api"
import type { News } from "./news.types"

export const getNews = async (): Promise<Response<News>> => {
	return api.get(`/news`)
}

export const getNewsById = async (
	id: ParamId
): Promise<ResponseSingleData<News>> => {
	return api.get(`/news/${id}`)
}
