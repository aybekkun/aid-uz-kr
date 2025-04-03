"use client"

import { cn } from "@/shared/lib/utils"
import { type ImageKey, useStylePersistStore } from "@/shared/store"
import { default as NextImage, type ImageProps } from "next/image"
import { forwardRef } from "react"

const Image = forwardRef<
	HTMLImageElement,
	ImageProps & {
		image?: ImageKey
	}
>(({ className, src, image, ...rest }, ref) => {
	const { image: imageStyle } = useStylePersistStore()

	const imageType = image || imageStyle

	return (
		<div
			className={cn("border border-dashed border-transparent", {
				"border-foreground flex justify-center items-center":
					imageType === "off",
				"absolute inset-0": rest.fill
			})}
		>
			{imageType === "off" ? (
				<p
					className={cn(
						"flex justify-center z-10 items-center overflow-hidden text-center h-full w-full text-base"
					)}
					style={{
						width: rest.width,
						height: rest.height
					}}
				>
					{rest.alt}
				</p>
			) : (
				<NextImage
					ref={ref}
					className={cn(
						"flex justify-center z-10 items-center overflow-hidden text-center",
						{
							grayscale: imageType === "sepia"
						},
						className
					)}
					src={src}
					{...rest}
				/>
			)}
		</div>
	)
})
Image.displayName = "Image"

export { Image }
