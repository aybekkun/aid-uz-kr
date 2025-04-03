export type * from "./params.types"
export type * from "./response.types"

export type Member = {
	id: number
	full_name: string
	position: string
	description: string
	image: string
	created_at: string
	updated_at: string
	slug: string
}

export type Project = {
	id: number
	name: string
	description: string
	image: string
	created_at: string
	updated_at: string
	slug: string
}
