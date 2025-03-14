"use client"

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
import { type FC } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"

type ContactChange = {
	firstname: string
	lastname: string
	email: string
	message: string
}

const ContactsForm: FC = () => {
	const form = useForm<ContactChange>({
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			message: ""
		}
	})

	const onSubmit: SubmitHandler<ContactChange> = (data) => {
		console.log(data)
	}

	return (
		<div className={"min-h-[80vh] flex items-center justify-center px-4"}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={"grid gap-4"}>
					<Stack className={"max-sm:flex-col"}>
						<FormField
							control={form.control}
							name={"firstname"}
							render={() => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={"lastname"}
							render={() => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</Stack>
					<FormField
						control={form.control}
						name={"email"}
						render={() => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"message"}
						render={() => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea rows={8} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Stack className={"justify-center mt-5 sm:justify-end"}>
						<Button size={"lg"} className={"max-sm:w-full"}>
							Get in touch
						</Button>
					</Stack>
				</form>
			</Form>
		</div>
	)
}

export { ContactsForm }
