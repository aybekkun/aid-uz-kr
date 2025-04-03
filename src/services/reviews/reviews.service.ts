import type { ResponseSingleData } from "@/services/shared"
import { api } from "@/shared/api"
import type { Review, ReviewChange } from "./reviews.types"

const createReviews = async (
	form: ReviewChange
): Promise<ResponseSingleData<Review>> => {
	return await api.post(`/reviews`, form)
}

export { createReviews }
