import { langStorage } from "@/shared/lib/storage"
import { create } from "zustand"

interface LangStore {
	lang: string
	setLang: (lang: string) => void
}

const useLangStore = create<LangStore>()((set) => ({
	lang: langStorage.get(),
	setLang: (lang) => {
		langStorage.set(lang)
		set({ lang })
	}
}))

export { useLangStore }
