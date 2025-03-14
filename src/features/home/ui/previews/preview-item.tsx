import type { News } from "@/services/news"
import { Button, Image } from "@/shared/ui"
import { Stack } from "@/widgets"
import { ChevronRight } from "lucide-react"
import { type FC } from "react"

interface PreviewItemProps {
	data: News
}

const PreviewItem: FC<PreviewItemProps> = ({ data: preview }) => {
	return (
		<div className={"flex max-lg:flex-col gap-10 p-1"}>
			<div
				className={
					"relative w-full lg:min-w-[500px] aspect-[16/10] max-w-[707px] rounded-2xl overflow-hidden"
				}
			>
				<Image
					src={preview?.image}
					fill={true}
					alt={preview.title}
					className={"object-cover w-full h-full"}
				/>
			</div>
			<div
				className={
					"flex flex-col items-start gap-6 justify-between lg:max-w-[26.813rem]"
				}
			>
				<Stack className={"flex-col gap-6"}>
					<h2 className={"text-2xl font-semibold"}>{preview?.title}</h2>
					<p className={"text-ellipsis overflow-hidden line-clamp-[10]"}>
						{preview?.description}
					</p>
				</Stack>
				<Button variant={"default-secondary"}>
					Подробнее <ChevronRight />
				</Button>
			</div>
		</div>
	)
}

export { PreviewItem }
