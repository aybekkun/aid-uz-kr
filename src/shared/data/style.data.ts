import type { FontSizeKey, ImageKey, ThemeKey } from "@/shared/store"

export const fontSizeData: {
	key: FontSizeKey
	className: string
}[] = [
	{
		key: "smallest",
		className: "text-sm"
	},
	{
		key: "small",
		className: "text-base"
	},
	{
		key: "normal",
		className: "text-lg"
	},
	{
		key: "big",
		className: "text-xl"
	},
	{
		key: "biggest",
		className: "text-2xl"
	}
]

export const themeData: ThemeKey[] = [
	"light",
	"dark",
	"blue",
	"yellow",
	"orange"
]

export const imageData: ImageKey[] = ["on", "sepia", "off"]
