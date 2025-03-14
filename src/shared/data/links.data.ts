import type { LinkItem } from "@/shared/types"

type LinkDataItem = {
	title: string
	href: string
	items: LinkItem[]
}

type LinkData = {
	association: LinkDataItem
	activity: LinkDataItem
	documents: LinkDataItem
}

export const linksData: LinkData = {
	association: {
		title: "Об Ассоциации",
		href: "/association",
		items: [
			{
				title: "Об Ассоциации",
				href: "/association/about"
			},
			{
				title: "Сотрудники",
				href: "/association/workers"
			},
			{
				title: "Список совета",
				href: "/association/council-list"
			},
			{
				title: "Список членов",
				href: "/association/member-list"
			},
			{
				title: "Годовые отчеты",
				href: "/association/annual-reports"
			},
			{
				title: "Устав",
				href: "/association/charter"
			}
		]
	},
	activity: {
		title: "Деятельность",
		href: "/activity",
		items: [
			{
				title: "Проекты",
				href: "/activity/projects"
			},
			{
				title: "История успеха",
				href: "/activity/success-stories"
			},
			{
				title: "Исследование",
				href: "/activity/study"
			},
			{
				title: "Семинары и конференции",
				href: "/activity/seminars-conferences"
			}
		]
	},
	documents: {
		title: "Документы",
		href: "/documents",
		items: [
			{
				title: "Конвенци",
				href: "/documents/convention"
			},
			{
				title: "Законы",
				href: "/documents/laws"
			},
			{
				title: "Указы",
				href: "/documents/decrees"
			},
			{
				title: "Полезные",
				href: "/documents/useful"
			}
		]
	}
}
