import type {
	GetParams,
	Member,
	ParamId,
	Response,
	ResponseSingleData
} from "@/services/shared"
import { api } from "@/shared/api"
import { cookies } from "next/headers"

const getMemberList = async (
	params: GetParams = {}
): Promise<Response<Member>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/list-of-members`,
		{ params },
		{
			"Accept-Language": lang || "ru"
		}
	)
}

const getMemberListById = async (
	id: ParamId
): Promise<ResponseSingleData<Member>> => {
	const cookieStore = cookies()
	const lang = cookieStore.get("lang")?.value
	return await api.get(
		`/list-of-members/${id}`,
		{},
		{
			"Accept-Language": lang || "ru"
		}
	)
}

export { getMemberList, getMemberListById }
