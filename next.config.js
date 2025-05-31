const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
	// redirects
	async redirects() {
		return [
			{
				source: "/qr/card",
				destination: "/?utm_source=business-card&utm_medium=qrcode",
				permanent: false,
			},
			{
				source: "/program",
				destination: "/",
				permanent: true,
			},
			{
				source: "/apply",
				destination: "https://forms.gle/VQNnxviCGBJ1G1gNA",
				permanent: false,
			},
		];
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
});

module.exports = nextConfig;
