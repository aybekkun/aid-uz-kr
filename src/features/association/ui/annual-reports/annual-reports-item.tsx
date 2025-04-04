"use client"

import type { FileItem } from "@/shared/types/files.types"
import { Button } from "@/shared/ui"
import { Stack } from "@/widgets"
import FileSaver from "file-saver"
import { ChevronRight, File } from "lucide-react"
import { type FC } from "react"

interface AnnualReportsItemProps {
	data: FileItem
}

const AnnualReportsItem: FC<AnnualReportsItemProps> = ({ data: file }) => {
	const onDownloadFile = () => {
		FileSaver.saveAs(file.file, file.file_name, {
			autoBom: false
		})
	}
	return (
		<Stack className={"gap-3"}>
			<div className={"size-20 text-primary"}>
				<File className={"size-20 p-1"} />
			</div>
			<Stack className={"flex-col justify-between gap-3"}>
				<h1 className={"text-2xl font-bold text-primary"}>{file.name}</h1>
				<Stack className={"items-center"}>
					<Button onClick={onDownloadFile}>
						Скачать <ChevronRight />
					</Button>
					<span className={"text-xl"}>{file.file_size}</span>
				</Stack>
			</Stack>
		</Stack>
	)
}

export { AnnualReportsItem }
