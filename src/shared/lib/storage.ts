import type { FontSizeKey, ThemeKey } from "@/shared/store"
import Cookies from "js-cookie"

export const themeStorage = {
	getFontSize: () => Cookies.get("font-size") as FontSizeKey,
	getTheme: () => Cookies.get("theme") as ThemeKey,
	setFontSize: (fontSize: string) =>
		Cookies.set("font-size", fontSize, {
			expires: 30
		}),
	setTheme: (theme: string) =>
		Cookies.set("theme", theme, {
			expires: 30
		})
}

export const langStorage = {
	get: () => Cookies.get("lang") || "ru",
	set: (lang: string) =>
		Cookies.set("lang", lang, {
			expires: 30
		}) || "ru"
}
