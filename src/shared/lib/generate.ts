export const generateSearchParams = (
	params?: Record<string, unknown>
): URLSearchParams => {
	if (!params) return new URLSearchParams()
	const formattedParams: Record<string, string> = Object.entries(params).reduce(
		(acc, [key, value]) => {
			if (value !== undefined && value !== null) {
				acc[key] = String(value) // Преобразуем значения в строки
			}
			return acc
		},
		{} as Record<string, string>
	)

	return new URLSearchParams(formattedParams)
}
