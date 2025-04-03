"use client"

import { linksData } from "@/shared/data/links.data"
import { Search } from "@/shared/layout/navbar/search"
import {
	Button,
	MenuBar,
	MenuBarButton,
	MenuBarItem,
	MenuBarSub,
	MenuBarSubButton,
	MenuBarSubItem,
	ScrollArea,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/shared/ui"
import { Menu } from "lucide-react"
import Link from "next/link"
import { type FC, useState } from "react"

const MenuButton: FC = () => {
	const [open, setOpen] = useState(false)

	const onCloseMenu = () => setOpen(false)

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild={true}>
				<Button
					size={"icon"}
					variant={"ghost"}
					className={"[&_svg]:size-7 md:hidden"}
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Меню</SheetTitle>
				</SheetHeader>
				<div className={"pt-4"}>
					<Search />
				</div>
				<ScrollArea className={"grid gap-4 py-4 overflow-y-auto h-full"}>
					<MenuBar>
						<MenuBarItem>
							<MenuBarButton asChild={true} onClick={onCloseMenu}>
								<Link href={"/"} className={"font-medium"}>
									Главная
								</Link>
							</MenuBarButton>
						</MenuBarItem>
						{Object.values(linksData).map((item) => (
							<MenuBarItem key={item.title}>
								<MenuBarButton asChild={true} onClick={onCloseMenu}>
									<Link href={item.href} className={"font-medium"}>
										{item.title}
									</Link>
								</MenuBarButton>
								{item.items?.length ? (
									<MenuBarSub>
										{item.items.map((item) => (
											<MenuBarSubItem key={item.title}>
												<MenuBarSubButton asChild={true} onClick={onCloseMenu}>
													<Link href={item.href}>{item.title}</Link>
												</MenuBarSubButton>
											</MenuBarSubItem>
										))}
									</MenuBarSub>
								) : null}
							</MenuBarItem>
						))}
					</MenuBar>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	)
}

export { MenuButton }
