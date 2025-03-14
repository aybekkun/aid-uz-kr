"use client"

import { cn } from "@/shared/lib/utils"
import { type ImageKey, useStyleStore } from "@/shared/store"
import { default as NextImage, type ImageProps } from "next/image"
import { forwardRef } from "react"

const Image = forwardRef<
	HTMLImageElement,
	ImageProps & {
		image?: ImageKey
	}
>(({ className, src, image, ...rest }, ref) => {
	const { image: imageStyle } = useStyleStore()

	const imageType = image || imageStyle

	return (
		<div
			className={cn({
				"border border-dashed border-foreground flex justify-center items-center":
					imageType === "off",
				"absolute inset-0": rest.fill
			})}
		>
			<NextImage
				ref={ref}
				className={cn(
					"flex justify-center z-10 items-center overflow-hidden text-center",
					{
						grayscale: imageType === "sepia",
						"rounded-none": imageType === "off"
					},
					className
				)}
				src={imageType === "off" ? "" : src}
				{...rest}
			/>
		</div>
	)
})
Image.displayName = "Image"

export { Image }
