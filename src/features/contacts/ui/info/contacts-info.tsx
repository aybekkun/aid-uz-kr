import { Button } from "@/shared/ui"
import { Stack } from "@/widgets"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { type FC } from "react"

const employees = [
	{
		name: "Ассоциация Инвалидов Узбекистан\n региональная отделение Республики Каракалпакстан",
		email: "aduzkkr@gmai.com"
	},
	{
		name: "Назарбаев Жаббар, председатель",
		email: "aduzkkr@gmai.com"
	},
	{
		name: "Ганиев Жарас, заместитель председателя",
		email: "aduzkkr@gmai.com"
	}
]

const ContactsInfo: FC = () => {
	return (
		<div>
			<Stack className={"flex-col border-b-4 pb-5 mb-5 gap-3"}>
				<h2 className={"text-2xl font-bold"}>Контакты</h2>
				<p className={"text-xl font-medium"}>Адрес:</p>
				<div className={"text-xl"}>
					<p>Республика Узбекистан</p>
					<p>Республика Каракалпакстан, г. Нукус </p>
					<p>230100 ул. А. Шамуратова 177Б</p>
				</div>
				<div>
					<Button size={"lg"} asChild={true}>
						<Link href={"/contacts/application"}>
							Отправить заявку <ChevronRight />
						</Link>
					</Button>
				</div>
			</Stack>
			<Stack className={"flex-col gap-3 mb-10"}>
				<h4 className={"text-xl font-semibold"}>Контакты сотрудников:</h4>
				{employees.map((employee, index) => (
					<div className={"text-xl"} key={index}>
						<p>{employee.name}</p>
						<p>
							Email:{" "}
							<a
								href={`mailto:${employee.email}`}
								className={
									"text-primary-secondary border-b border-primary-secondary"
								}
								rel={"nofollow"}
							>
								{employee.email}
							</a>
						</p>
					</div>
				))}
			</Stack>
			<div className={"mb-5"}>
				<iframe
					src={
						"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.426342813689!2d59.62385277664003!3d42.46122032870371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a697700b77f%3A0x6fde8c14e9ca448b!2z0YPQuy4g0JAuINCo0LDQvNGD0YDQsNGC0L7QstCwLCDQndGD0LrRg9GBLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQmtCw0YDQsNC60LDQu9C_0LDQutGB0YLQsNC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1740240389068!5m2!1sru!2s"
					}
					width={"600"}
					height={"650"}
					className={"w-full"}
					style={{ border: 0 }}
					allowFullScreen={true}
					loading={"lazy"}
					referrerPolicy={"no-referrer-when-downgrade"}
				></iframe>
			</div>
		</div>
	)
}

export { ContactsInfo }
