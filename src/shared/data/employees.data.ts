import type { Blog } from "@/shared/types/blog.types"

const employee = {
	title: "Нарбаев Жаббар Адилбай улы",
	subTitle: "Председатель в Каракалпакстане",
	description:
		"Имеется спорная точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных. Также как базовый вектор развития обеспечивает актуальность распределения внутренних резервов и ресурсов. "
}

export const employeesData: Blog[] = Array.from({ length: 4 }).map(
	(_, index) => ({
		...employee,
		image: `/association/worker-${index + 1}.jpg`,
		id: index + 1,
		slug: `${index + 1}`,
		created_at: "2025-01-01",
		updated_at: "2025-01-01"
	})
)
