"use client"

import { fontSizeData, imageData, themeData } from "@/shared/data/style.data"
import { cn } from "@/shared/lib/utils"
import { useStyleStore } from "@/shared/store"
import { Button, Image } from "@/shared/ui"
import { Container } from "@/widgets"
import { type FC } from "react"

const StyleControlPanel: FC = () => {
	const { fontSize, setFontSize, theme, setTheme, image, setImage } =
		useStyleStore()

	return (
		<section className={"bg-footer small py-1"}>
			<Container>
				<div className={"flex gap-2 justify-center"}>
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
				</div>
			</Container>
		</section>
	)
}

export { StyleControlPanel }
