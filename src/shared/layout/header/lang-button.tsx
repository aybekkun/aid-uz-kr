"use client"

import { useLangStore } from "@/shared/store"
import {
	Button,
	MenuBar,
	MenuBarButton,
	MenuBarItem,
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/shared/ui"
import { LoaderCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FC, useEffect, useState } from "react"

const langData = [
	{
		value: "ru",
		name: "Ру",
		label: "Русский"
	},
	{
		value: "en",
		name: "En",
		label: "English"
	},
	{
		value: "uz",
		name: "Uz",
		label: "Uzbek"
	},
	{
		value: "kaa",
		name: "Qq",
		label: "Qaraqalpaq"
	}
]

const LangButton: FC = () => {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const { lang, setLang } = useLangStore()
	const [value, setValue] = useState("")

	useEffect(() => {
		setValue(langData.find((el) => el.value === lang)?.name || "Py")
	}, [lang])
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild={true}>
				<Button
					size={"icon"}
					variant={"ghost"}
					className={"text-xl md:text-2xl h-10 w-10 font-normal [&_svg]:size-6"}
				>
					{value ? value : <LoaderCircle className={"animate-spin"} />}
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<MenuBar>
					{langData.map((item, index) => (
						<MenuBarItem key={index}>
							<MenuBarButton
								isActive={item.value === lang}
								onClick={() => {
									setOpen(false)
									setLang(item.value)
									router.refresh()
								}}
							>
								{item.label}
							</MenuBarButton>
						</MenuBarItem>
					))}
				</MenuBar>
			</PopoverContent>
		</Popover>
	)
}

export { LangButton }
