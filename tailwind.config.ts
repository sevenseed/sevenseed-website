import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#00c8be",

					secondary: "#01BAEF",

					accent: "#0B4F6C",

					neutral: "FBFBFF",

					"base-100": "#1d232a",

					info: "#3abff8",

					success: "#36d399",

					warning: "#fbbd23",

					error: "#f87272",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
export default config;
