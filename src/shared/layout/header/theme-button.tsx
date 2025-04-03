"use client"

import { cn } from "@/shared/lib/utils"
import { useStylePersistStore } from "@/shared/store"
import { Button } from "@/shared/ui"
import { Eye } from "lucide-react"
import { type FC } from "react"

const ThemeButton: FC = () => {
	const { open, toggleOpen } = useStylePersistStore()
	return (
		<Button
			size={"icon"}
			variant={"ghost"}
			onClick={toggleOpen}
			className={cn(
				"[&_svg]:size-7 md:[&_svg]:size-9 text-muted-foreground rounded-full",
				{
					"bg-accent": open
				}
			)}
		>
			<Eye />
		</Button>
	)
}

export { ThemeButton }
