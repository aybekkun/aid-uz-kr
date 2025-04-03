import type { Blog } from "@/shared/types/blog.types"

const successStory: Blog = {
	id: 1,
	slug: "slug",
	content: "content",
	created_at: "created_at",
	updated_at: "updated_at",
	image: "/activity/success-story.jpg",
	title: "Право на образование лиц с инвалидностью",
	subTitle: "24 декабрь 2024 г.",
	description:
		"Этот доклад посвящён анализу права на образование для лиц с инвалидностью, ключевым законодательным актам, существующим программам и вызовам, а также современным подходам к обеспечению доступности образования для всех... Этот доклад посвящён анализу права на образование для лиц с инвалидностью, ключевым законодательным актам, существующим программам и вызовам, а также современным подходам к обеспечению доступности образования для всех..."
}

export const successStoriesData: Blog[] = Array.from({ length: 9 }).map(
	(_, index) => ({
		...successStory,
		id: index + 1
	})
)
