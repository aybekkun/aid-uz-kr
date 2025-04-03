import { type FC } from "react"

interface HtmlParserProps {
	content: string
}

const HtmlParser: FC<HtmlParserProps> = ({ content }) => {
	return (
		<>
			<div
				dangerouslySetInnerHTML={{
					__html: content
				}}
			></div>
		</>
	)
}

export { HtmlParser }
