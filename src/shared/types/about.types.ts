export type About = {
	title: string
	description?: string
	items?: Omit<About, "items">[]
}
