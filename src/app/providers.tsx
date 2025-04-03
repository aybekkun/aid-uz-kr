"use client"

import { themeStorage } from "@/shared/lib/storage"
import { cn } from "@/shared/lib/utils"
import { useStylePersistStore } from "@/shared/store"
import { type FC, type PropsWithChildren, useEffect, useState } from "react"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const { fontSize, theme, setFontSize, setTheme } = useStylePersistStore()
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		const cookieFontSize = themeStorage.getFontSize()
		const cookieTheme = themeStorage.getTheme()
		setIsClient(true)
		if (cookieFontSize && cookieTheme) {
			setFontSize(cookieFontSize || "small")
			setTheme(cookieTheme || "light")
		}
	}, [setFontSize, setTheme])
	return (
		<div className={cn(isClient && fontSize, isClient && theme)}>
			{children}
		</div>
	)
}

export { Providers }
