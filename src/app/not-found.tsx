import { Image } from "@/shared/ui"
import { Container } from "@/widgets"

export const metadata = {
	title: "Страница не найдена"
}

export default function NotFound() {
	return (
		<section className={"flex flex-col grow"}>
			<Container className={"grow flex flex-col"}>
				<div
					className={
						"grow flex flex-col justify-center items-center bg-center bg-cover relative py-10"
					}
				>
					<Image
						src={"/404.png"}
						width={0}
						height={0}
						sizes={"100vw"}
						className={"w-full h-[31.25rem] object-contain"}
						alt={"404"}
					/>
					<div>
						<h1 className={"text-5xl text-center"}>404</h1>
						<p className={"text-xl text-center"}>Страница не найдена</p>
					</div>
				</div>
			</Container>
		</section>
	)
}
