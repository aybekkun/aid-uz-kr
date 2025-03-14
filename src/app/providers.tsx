"use client"

import { cn } from "@/shared/lib/utils"
import { useStyleStore } from "@/shared/store"
import { type FC, type PropsWithChildren } from "react"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const { fontSize, theme } = useStyleStore()

	return <div className={cn(fontSize, theme)}>{children}</div>
}

export { Providers }
