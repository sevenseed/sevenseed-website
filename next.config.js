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
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
