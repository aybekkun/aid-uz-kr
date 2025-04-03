import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants"
import { LangButton } from "@/shared/layout/header/lang-button"
import { MenuButton } from "@/shared/layout/header/menu-button"
import { ThemeButton } from "@/shared/layout/header/theme-button"
import { Image } from "@/shared/ui"
import { Container, Stack } from "@/widgets"
import Link from "next/link"
import { type FC } from "react"

const Header: FC = () => {
	return (
		<header className={"px-4"}>
			<Container>
				<div
					className={
						"flex justify-between gap-2 border-b-4 border-primary py-6"
					}
				>
					<Stack className={"items-center"}>
						<Link href={"/"}>
							<Image
								src={"/logo.png"}
								width={110}
								height={114}
								alt={"Логотип"}
								className={
									"w-[110px] h-[114px] max-md:w-[60px] max-md:h-[64px]"
								}
							/>
						</Link>
						<Stack className={"flex-col gap-1 max-md:hidden"}>
							<h1 className={"text-3xl font-semibold text-primary uppercase"}>
								{SITE_NAME}
							</h1>
							<h2 className={"text-2xl font-normal uppercase"}>
								{SITE_DESCRIPTION}
							</h2>
						</Stack>
					</Stack>

					<Stack className={"gap-5 max-md:items-center"}>
						<ThemeButton />
						<LangButton />
						<MenuButton />
					</Stack>
				</div>
			</Container>
		</header>
	)
}

export { Header }
