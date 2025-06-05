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
				source: "/press-release",
				destination: "https://docs.google.com/document/d/e/2PACX-1vSJ9N-_RyKFro__H1epqLTvj5ZnCJ8ddGixXt_hF6hnEOZOTb1csNLffxDVdAcToaFlD6_F65StEyVj/pub",
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
