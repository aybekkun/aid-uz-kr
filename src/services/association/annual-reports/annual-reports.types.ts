import type { FileItem } from "@/shared/types/files.types"

export type AnnualReport = FileItem & {
	id: number
	name: string
	file: string
	created_at: string
	slug: string
}
