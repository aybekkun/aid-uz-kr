import { cn } from "@/shared/lib/utils"
import { cookies } from "next/headers"
import { type FC, type PropsWithChildren } from "react"

const ServerProviders: FC<PropsWithChildren> = ({ children }) => {
	const cookieStore = cookies()
	const theme = cookieStore.get("theme")?.value
	const fonSize = cookieStore.get("font-size")?.value

	return <div className={cn(theme, fonSize)}>{children}</div>
}

export { ServerProviders }
