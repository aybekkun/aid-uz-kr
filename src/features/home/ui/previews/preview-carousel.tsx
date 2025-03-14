"use client"

import type { News } from "@/services/news"
import { cn } from "@/shared/lib/utils"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	Skeleton
} from "@/shared/ui"
import { type FC, useEffect, useState } from "react"
import { PreviewItem } from "./preview-item"

interface PreviewCarouselProps {
	data: News[]
}

const PreviewCarousel: FC<PreviewCarouselProps> = ({ data: news = [] }) => {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])
	return (
		<div className={"px-12 border-b-4 border-primary py-12"}>
			<Carousel
				setApi={setApi}
				className={"w-full"}
				opts={{
					loop: true
				}}
			>
				<CarouselContent>
					{news.map((preview, index) => (
						<CarouselItem key={index}>
							<PreviewItem data={preview} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					variant={"ghost"}
					className={"[&_svg]:size-12 size-12"}
					iconProps={{
						strokeWidth: 1
					}}
				/>
				<CarouselNext
					variant={"ghost"}
					className={"[&_svg]:size-12 size-12"}
					iconProps={{
						strokeWidth: 1
					}}
				/>
			</Carousel>
			<div className={"py-2 flex justify-center gap-3"}>
				{api
					? Array.from({ length: count }).map((_, index) => (
							<span
								className={cn(
									"size-3 cursor-pointer rounded-full bg-muted-foreground/60",
									{
										"bg-primary-secondary": current - 1 === index
									}
								)}
								onClick={() => api?.scrollTo(index)}
								key={index}
							/>
						))
					: Array.from({ length: 5 }).map((_, index) => (
							<Skeleton className={"size-3 rounded-full"} key={index} />
						))}
			</div>
		</div>
	)
}

export { PreviewCarousel }
