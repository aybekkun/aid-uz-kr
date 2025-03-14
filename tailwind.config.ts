import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: "var(--font-montserrat)"
			},
			fontSize: {
				sm: [
					"calc(var(--font-size) - 2px)", // 14px
					{
						lineHeight: "calc(var(--line-height) - 4px)" // 20px
					}
				],
				base: [
					"var(--font-size)", // 16px
					{
						lineHeight: "var(--line-height)" // 24px
					}
				],
				lg: [
					"calc(var(--font-size) + 2px)", // 18px
					{
						lineHeight: "calc(var(--line-height) + 4px)" // 28px
					}
				],
				xl: [
					"calc(var(--font-size) + 4px)", // 20px
					{
						lineHeight: "calc(var(--line-height) + 4px)" // 28px
					}
				],
				"2xl": [
					"calc(var(--font-size) + 8px)", // 24px
					{
						lineHeight: "calc(var(--line-height) + 8px)" // 32px
					}
				],
				"3xl": [
					"calc(var(--font-size) + 14px)", // 30px
					{
						lineHeight: "calc(var(--line-height) + 12px)" // 36px
					}
				],
				"4xl": [
					"calc(var(--font-size) + 20px)", // 36px
					{
						lineHeight: "calc(var(--line-height) + 16px)" // 40px
					}
				],
				"5xl": [
					"calc(var(--font-size) + 32px)", // 48px
					{
						lineHeight: "1" // 1
					}
				],
				"6xl": [
					"calc(var(--font-size) + 44px)", // 60px
					{
						lineHeight: "1" // 1
					}
				],
				"7xl": [
					"calc(var(--font-size) + 56px)", // 72px
					{
						lineHeight: "1" // 1
					}
				],
				"8xl": [
					"calc(var(--font-size) + 80px)", // 96px
					{
						lineHeight: "1" // 1
					}
				],
				"9xl": [
					"calc(var(--font-size) + 112px)", // 128px
					{
						lineHeight: "1" // 1
					}
				]
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					secondary: "hsl(var(--primary-secondary))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))"
				},
				footer: "hsl(var(--footer))"
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")]
}
export default config
