import { themeStorage } from "@/shared/lib/storage"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type FontSizeKey = "smallest" | "small" | "normal" | "big" | "biggest"
export type ThemeKey = "light" | "dark" | "blue" | "yellow" | "orange"
export type ImageKey = "on" | "sepia" | "off"

interface StyleStore {
	open: boolean
	toggleOpen: () => void

	fontSize: FontSizeKey
	theme: ThemeKey
	image: ImageKey
	setFontSize: (fontSize: FontSizeKey) => void
	setTheme: (theme: ThemeKey) => void
	setImage: (image: ImageKey) => void
}

const useStylePersistStore = create(
	persist<StyleStore>(
		(set) => ({
			open: false,
			toggleOpen: () => set((prev) => ({ open: !prev.open })),

			fontSize: "small",
			theme: "light",
			image: "on",
			setFontSize: (fontSize) => {
				themeStorage.setFontSize(fontSize)
				set({ fontSize })
			},
			setTheme: (theme) => {
				themeStorage.setTheme(theme)
				set({ theme })
			},
			setImage: (image) => set({ image })
		}),
		{
			name: "style"
		}
	)
)

export { useStylePersistStore }
