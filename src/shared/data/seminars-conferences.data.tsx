import type { Blog } from "@/shared/types"

const seminarsConference: Blog = {
	id: 1,
	title: "Семинар",
	subTitle: "22 декабрь 2024 г.",
	description:
		"Имеется спорная точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных. Также как базовый вектор развития обеспечивает актуальность распределения внутренних резервов и ресурсов.",
	image: "/activity/seminar-conference.jpg"
}

export const seminarsConferencesData: Blog[] = Array.from({ length: 4 }).map(
	(_, index) => ({
		...seminarsConference,
		title: `Семинар №${index + 1}`,
		id: index + 1
	})
)
