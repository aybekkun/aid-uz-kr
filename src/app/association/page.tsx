import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Ассоцияция"
}

export default function Page() {
	return (
		<section className={"flex items-center justify-center w-full min-h-[50vh]"}>
			<h1 className={"text-3xl text-center"}>Ассоцияция</h1>
		</section>
	)
}
