"use client"

import { fontSizeData, imageData, themeData } from "@/shared/data/style.data"
import { cn } from "@/shared/lib/utils"
import { useStylePersistStore } from "@/shared/store"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	Button,
	Image
} from "@/shared/ui"
import { Container } from "@/widgets"
import { RotateCcw } from "lucide-react"
import { type FC, useMemo } from "react"

const StyleControlPanel: FC = () => {
	const { open, fontSize, setFontSize, theme, setTheme, image, setImage } =
		useStylePersistStore()
	const value = useMemo(() => (open ? "theme" : ""), [open])

	return (
		<section className={"bg-footer small"}>
			<Container>
				<Accordion type={"single"} value={value}>
					<AccordionItem value={"theme"} className={"border-0"}>
						<AccordionContent className={"py-1"}>
							<div className={"py-1 flex gap-2 justify-center flex-wrap"}>
								<ul className={"flex items-center gap-1"}>
									{fontSizeData.map((item, index) => (
										<li key={index}>
											<Button
												variant={item.key === fontSize ? "default" : "ghost"}
												size={"icon"}
												className={cn(item.className, {
													"font-bold": item.key === fontSize
												})}
												onClick={() => setFontSize(item.key)}
											>
												A
											</Button>
										</li>
									))}
								</ul>
								<ul className={"flex items-center gap-1"}>
									{themeData.map((item, index) => (
										<li key={index}>
											<Button
												size={"icon"}
												className={cn(
													item,
													"bg-background text-foreground hover:bg-background hover:scale-110 transition-all border",
													{
														"scale-110": theme === item
													}
												)}
												onClick={() => setTheme(item)}
											>
												Ц
											</Button>
										</li>
									))}
								</ul>
								<ul className={"flex items-center gap-1"}>
									{imageData.map((item, index) => (
										<li key={index}>
											<Button
												size={"icon"}
												className={cn(
													"size-14 p-1 bg-background text-foreground hover:bg-background hover:scale-110 transition-all border",
													{
														"scale-110": image === item
													}
												)}
												onClick={() => setImage(item)}
											>
												<Image
													image={item}
													src={"/logo.png"}
													width={48}
													height={48}
													alt={"Лого"}
												/>
											</Button>
										</li>
									))}
								</ul>
								<div className={"flex items-center"}>
									<Button
										size={"icon"}
										onClick={() => {
											setTheme("light")
											setImage("on")
											setFontSize("small")
										}}
									>
										<RotateCcw />
									</Button>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Container>
		</section>
	)
}

export { StyleControlPanel }
