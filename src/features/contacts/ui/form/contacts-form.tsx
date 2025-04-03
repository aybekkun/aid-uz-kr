"use client"

import {
	createReviews,
	type ReviewChange,
	reviewsSchema
} from "@/services/reviews"
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea
} from "@/shared/ui"
import { Stack } from "@/widgets"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, LoaderCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FC, useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

const ContactsForm: FC = () => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const form = useForm<ReviewChange>({
		resolver: zodResolver(reviewsSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			message: ""
		}
	})

	const onSubmit: SubmitHandler<ReviewChange> = async (data) => {
		setLoading(true)

		try {
			await createReviews(data)
			setLoading(false)
			toast.success("Ваша заявка успешно отправлена")
			form.reset()
			router.push("/contacts")
		} catch (error) {
			console.error(error)
			if (error instanceof Error) {
				toast.error(error?.message)
			}
			setLoading(false)
		}
		setLoading(false)
	}

	return (
		<div className={"min-h-[80vh] flex items-center justify-center px-4"}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={"grid gap-4"}>
					<Stack className={"max-sm:flex-col"}>
						<FormField
							control={form.control}
							name={"first_name"}
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={"last_name"}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</Stack>
					<FormField
						control={form.control}
						name={"email"}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"message"}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea rows={8} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Stack className={"justify-center mt-5 sm:justify-end"}>
						<Button size={"lg"} className={"max-sm:w-full"}>
							Отправить{" "}
							{loading ? (
								<LoaderCircle className={"animate-spin"} />
							) : (
								<ArrowRight />
							)}
						</Button>
					</Stack>
				</form>
			</Form>
		</div>
	)
}

export { ContactsForm }
