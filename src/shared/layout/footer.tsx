import { FooterLinkItem } from "@/shared/layout/footer/footer-link-item"
import { Image } from "@/shared/ui"
import { Container, Stack } from "@/widgets"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { type FC } from "react"

const Footer: FC = () => {
	return (
		<footer className={"bg-footer px-4"}>
			<Container>
				<div>
					<div className={"border-b-4 pt-24 pb-16 border-primary"}>
						<Stack
							className={"gap-12 flex-wrap max-md:flex-col max-md:items-center"}
						>
							<div>
								<Image
									src={"/logo.png"}
									width={110}
									height={114}
									alt={"Лого"}
								/>
							</div>
							<FooterLinkItem href={"/"} title={"Главная"} />
							<FooterLinkItem
								title={"Ассоциация"}
								href={"/association"}
								items={[
									{
										href: "/about",
										title: "Об Ассоциации"
									},
									{
										href: "/workers",
										title: "Сотрудники"
									},
									{
										href: "/council-list",
										title: "Список совета"
									},
									{
										href: "/member-list",
										title: "Список членов"
									},
									{
										href: "/annual-reports",
										title: "Годовые отчеты"
									},
									{
										href: "/charter",
										title: "Устав"
									}
								]}
							/>
							<FooterLinkItem
								title={"Деятельность"}
								href={"/activity"}
								items={[
									{
										href: "/projects",
										title: "Проекты"
									},
									{
										href: "/success-stories",
										title: "История успеха"
									},
									{
										href: "/study",
										title: "Исследование"
									},
									{
										href: "/seminars-conferences",
										title: "Семинары и конференции"
									}
								]}
							/>
							<Stack className={"flex-col"}>
								<FooterLinkItem
									title={"Контакты"}
									items={[
										{
											href: "tel:+998937749328",
											rel: "nofollow",
											title: "+998 93 774 93 28"
										},
										{
											href: "tel:+998913067225",
											rel: "nofollow",
											title: "+998 91 306 72 25"
										}
									]}
								/>
								<FooterLinkItem
									title={"Контакты"}
									items={[
										{
											children: (
												<Stack>
													<Link
														href={"https://facebook.com"}
														target={"_blank"}
														className={"hover:text-primary-secondary"}
														rel={"nofollow noopener noreferrer"}
													>
														<Facebook fill={"currentColor"} strokeWidth={0} />
													</Link>
													<Link
														href={"https://instagram.com"}
														target={"_blank"}
														className={"hover:text-primary-secondary"}
														rel={"nofollow noopener noreferrer"}
													>
														<Instagram />
													</Link>
													<Link
														href={"https://x.com"}
														target={"_blank"}
														className={"hover:text-primary-secondary"}
														rel={"nofollow noopener noreferrer"}
													>
														<Twitter fill={"currentColor"} />
													</Link>
													<Link
														href={"https://youtube.com"}
														target={"_blank"}
														className={"hover:text-primary-secondary"}
														rel={"nofollow noopener noreferrer"}
													>
														<Youtube />
													</Link>
												</Stack>
											)
										}
									]}
								/>
								<FooterLinkItem
									title={"Адрес"}
									items={[
										{
											href: "https://www.google.com/maps?q=230100, г. Нукус, ул. Шамуратов 117Б",
											rel: "nofollow",
											target: "_blank",
											title: "230100, г. Нукус, ул. Шамуратов 117Б"
										}
									]}
								/>
							</Stack>
						</Stack>
					</div>
					<div className={"py-8 text-center"}>
						<p className={"text-sm font-semibold"}>
							Copyright © {new Date().getFullYear()} РУз Ассоциация Инвалидов
							Узбекистана региональная отеделение Республики Каракалпактсан. All
							Rights Reserved
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export { Footer }
