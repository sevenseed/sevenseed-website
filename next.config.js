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
		];
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
});

module.exports = nextConfig;
