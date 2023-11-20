/** @type {import('next').NextConfig} */
const nextConfig = {
	// redirects
	async redirects() {
		return [
			{
				source: "/signup",
				destination: "/waitlist",
				permanent: false,
			},
			{
				source: "/contact",
				destination: "/waitlist",
				permanent: false,
			},
			{
				source: "/qr/card",
				destination: "/?utm_source=business-card&utm_medium=qrcode",
				permanent: false,
			},
		];
	},
	// Localization routing
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "en",
		localeDetection: false,
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
