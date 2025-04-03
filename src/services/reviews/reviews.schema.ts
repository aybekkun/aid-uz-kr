import { z } from "zod"

export const reviewsSchema = z.object({
	first_name: z.string().nonempty({
		message: "Пожалуйста, заполните поле"
	}),
	last_name: z.string().nonempty({
		message: "Пожалуйста, заполните поле"
	}),
	email: z
		.string()
		.nonempty({
			message: "Пожалуйста, заполните поле"
		})
		.email({
			message: "Строка не является Email почтой"
		}),
	message: z.string().nonempty({
		message: "Пожалуйста, заполните поле"
	})
})
