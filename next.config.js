const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
	// redirects
	async redirects() {
		return [
			{
				source: "/login",
				destination: "/dashboard",
				permanent: false,
			},
			{
				source: "/signup",
				destination: "/dashboard",
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
	experimental: {
		serverActions: true,
	},
});

module.exports = nextConfig;
