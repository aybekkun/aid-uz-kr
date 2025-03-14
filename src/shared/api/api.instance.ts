import { generateSearchParams } from "@/shared/lib/generate"

class Api {
	private API_URL = `${process.env.NEXT_PUBLIC_API_URL}/user`

	constructor(private defaultHeaders: Record<string, string> = {}) {}

	async get<T>(
		path: string,
		params?: Record<string, unknown>,
		headers?: Record<string, string>,
		next?: NextFetchRequestConfig
	): Promise<T> {
		return this.fetch<T>(path, "GET", undefined, params, headers, next)
	}

	async post<T>(
		path: string,
		body?: Record<string, unknown>,
		params?: Record<string, unknown>,
		headers?: Record<string, string>,
		next?: NextFetchRequestConfig
	): Promise<T> {
		return this.fetch<T>(path, "POST", body, params, headers, next)
	}

	async put<T>(
		path: string,
		body?: Record<string, unknown>,
		params?: Record<string, unknown>,
		headers?: Record<string, string>,
		next?: NextFetchRequestConfig
	): Promise<T> {
		return this.fetch<T>(path, "PUT", body, params, headers, next)
	}

	async delete<T>(
		path: string,
		params?: Record<string, unknown>,
		headers?: Record<string, string>,
		next?: NextFetchRequestConfig
	): Promise<T> {
		return this.fetch<T>(path, "DELETE", undefined, params, headers, next)
	}

	async patch<T>(
		path: string,
		body?: Record<string, unknown>,
		params?: Record<string, unknown>,
		headers?: Record<string, string>,
		next?: NextFetchRequestConfig
	): Promise<T> {
		return this.fetch<T>(path, "PATCH", body, params, headers, next)
	}

	private async fetch<T>(
		path: string,
		method: string,
		body?: Record<string, unknown>,
		params?: Record<string, unknown>,
		headers?: Record<string, string>,
		next?: NextFetchRequestConfig
	): Promise<T> {
		const search = generateSearchParams(params)
		const url = `${this.API_URL}${path}${search ? "?" + search.toString() : ""}`

		try {
			const response = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
					...this.defaultHeaders,
					...headers
				},
				body: body ? JSON.stringify(body) : null,
				next
			})

			const data = await response.json()
			if (!response.ok) {
				const error = data as Error
				throw new Error(error?.message || response.statusText)
			}

			return data
		} catch (error) {
			throw error
		}
	}
}

export const api = new Api()
