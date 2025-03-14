export type Response<T> = {
	message?: string
	data: T[]
	pagination: Pagination
}

export type ResponseData<T> = {
	message?: string
	data: T[]
}

export type ResponseSingleData<T> = {
	message?: string
	data: T
}

export type Pagination = {
	count: number
	next: null | string
	previous: null | string
}

export type ResponseError = {
	message: string
	errors: string[]
}
