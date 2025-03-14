import { Input } from "@/shared/ui"
import { SearchIcon } from "lucide-react"
import { type FC } from "react"

const Search: FC = () => {
	return (
		<div className={"relative"}>
			<Input className={"pl-8"} />
			<SearchIcon
				className={"absolute top-1.5 left-1.5 text-muted-foreground"}
			/>
		</div>
	)
}

export { Search }
